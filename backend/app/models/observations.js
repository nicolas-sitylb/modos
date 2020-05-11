let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;
const Event = require('./events');
const fs = require('fs');
const path = require('path');
const config = require('../configs/config');

const Description = new Schema({
    obstacle: {
        type: String,
        enum: ['curb ramp', 'missing curb ramp', 'surface problem', 'obstacle', 'width', 'security', 'slope', 'no problem', 'bonus'],
        required: [true, 'obstacle is required']
    },
    freeText: {
        type: String,
        trim: true
    },
    impact: {
        type: Number,
        required: [true, 'impact is required']
    }
});

const BoundingBox = new Schema({
    x: {
        type: Number,
        required: [true, 'bounding box\'s x coordinate is required']
    },
    y: {
        type: Number,
        required: [true, 'bounding box\'s y coordinate is required']
    },
    width: {
        type: Number,
        required: [true, 'bounding box\'s width is required'],
        min: [1, 'bounding box\'s width cannot be null']
    },
    height: {
        type: Number,
        required: [true, 'bounding box\'s height is required'],
        min: [1, 'bounding box\'s height cannot be null']
    }
})

const Image = new Schema({
    basename: {
        type: String,
        required: [true, 'image name is required']
    },
    width: {
        type: Number,
        //required: [true, 'width is required']
    },
    height: {
        type: Number,
        //required: [true, 'height is required']
    },
    boundingBox: BoundingBox
});

Image.virtual('imageURL').get(function () {
    return config.baseUrl + config.storageDirectory + "/" + this.basename;
});

const Location = new Schema({
    latitude: {
        type: Number,
    },
    longitude: {
        type: Number,
    }
});

const Observation = new Schema({
    owner: {
        type: ObjectId,
        ref: 'User',
        required: [true, 'owner is required']
    },
    description: Description,
    image: Image,
    location: Location
}, {
    timestamps: true
});


Observation.methods.saveImage = async function(imageData) {
    try {
        this.image = {};
        this.image.basename = String(Date.now()) + config.imageFormat;
        const imagePath = path.join(config.storageDirectory, this.image.basename);

        const imageWithoutMetadata = imageData.split(',')[1];
        const decodedData = Buffer.from(imageWithoutMetadata, 'base64');
        await fs.promises.writeFile(imagePath, decodedData);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

Observation.methods.loadImage = async function(imageURL) {
    decodedData = await fs.promises.readFile(imageURL);
    const imageData = new Buffer(decodedData).toString('base64');
    return imageData;
};

if (!Observation.options.toObject) Observation.options.toObject = {};
Observation.options.toObject.transform = function(observation, observationRespnse, options) {
    delete observationRespnse.createdAt;
    delete observationRespnse.updatedAt;
    delete observationRespnse.__v;
};

if (!Description.options.toObject) Description.options.toObject = {};
Description.options.toObject.transform = function(description, descriptionResponse, options) {
    delete descriptionResponse._id;
};

if (!Image.options.toObject) Image.options.toObject = {};
Image.options.toObject.transform = function(image, imageResponse, options) {
    delete imageResponse._id;
};

if (!BoundingBox.options.toObject) BoundingBox.options.toObject = {};
BoundingBox.options.toObject.transform = function(boundingBox, boundingBoxResponse, options) {
    delete boundingBoxResponse._id;
}

if (!Location.options.toObject) Location.options.toObject = {};
Location.options.toObject.transform = function(location, locationResponse, options) {
    delete locationResponse._id;
};

module.exports = mongoose.model('Observation', Observation);
