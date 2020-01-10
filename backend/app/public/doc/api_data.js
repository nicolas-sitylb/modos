define({ "api": [
  {
    "type": "post",
    "url": "/auth/facebook",
    "title": "Log a user with facebook authentication",
    "name": "authFacebook",
    "group": "Authentication",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>user info.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/authentication_Routes.js",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/auth/facebook"
      }
    ]
  },
  {
    "type": "post",
    "url": "/auth/forgot",
    "title": "Send forgot password link",
    "name": "authForgotPassword",
    "group": "Authentication",
    "permission": [
      {
        "name": "registered user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/authentication_Routes.js",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/auth/forgot"
      }
    ]
  },
  {
    "type": "get",
    "url": "/auth/google",
    "title": "Log a user with google authentication",
    "name": "authGoogle",
    "group": "Authentication",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>user info.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/authentication_Routes.js",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/auth/google"
      }
    ]
  },
  {
    "type": "post",
    "url": "/auth/local/login",
    "title": "Log in a local user account",
    "name": "authLogin",
    "group": "Authentication",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>user info.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/authentication_Routes.js",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/auth/local/login"
      }
    ]
  },
  {
    "type": "post",
    "url": "/auth/logout",
    "title": "Log out a user",
    "name": "authLogout",
    "group": "Authentication",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>user info.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/authentication_Routes.js",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/auth/logout"
      }
    ]
  },
  {
    "type": "post",
    "url": "/auth/local/register",
    "title": "Create new local user account",
    "name": "authRegister",
    "group": "Authentication",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>new user email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..",
            "optional": false,
            "field": "password",
            "description": "<p>password. Min length: 6</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "2..",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "letter",
            "description": "<p>newsletter subscription</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recaptcha",
            "description": "<p>racaptcha response to validate</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>user info.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/authentication_Routes.js",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/auth/local/register"
      }
    ]
  },
  {
    "type": "get",
    "url": "/collections",
    "title": "Get list",
    "description": "<p>@apiName collectionsList</p>",
    "group": "Collections",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "parameter": {
      "fields": {
        "URL Query Parameters": [
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>collection ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": false,
            "field": "owner_id",
            "description": "<p>owner ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>user ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Boolean",
            "optional": false,
            "field": "is_challenge",
            "description": "<p>true if collection is a current challenge.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "array",
            "description": "<p>list of collections with the following attributes</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>collection's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>collection's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>collection's link</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "owner_id",
            "description": "<p>owner's ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>collection's description</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_publi",
            "description": "<p>publication date</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "nImages",
            "description": "<p>number of images in the collection</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "nGeoref",
            "description": "<p>number of georeferenced images in the collection</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/collections_Routes.js",
    "groupTitle": "Collections",
    "name": "GetCollections",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/collections"
      }
    ]
  },
  {
    "type": "get",
    "url": "/corrections",
    "title": "Get list",
    "description": "<p>@apiName correctionsList</p>",
    "group": "Corrections",
    "permission": [
      {
        "name": "authentified users"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + token JWT</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Query Parameters": [
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "id",
            "description": "<p>correction id</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "String",
            "allowedValues": [
              "\"created\"",
              "\"accepted\"",
              "\"updated\""
            ],
            "optional": true,
            "field": "state",
            "description": "<p>state of the correction</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "String",
            "allowedValues": [
              "\"title\"",
              "\"caption\""
            ],
            "optional": true,
            "field": "type",
            "description": "<p>correction type</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_min",
            "description": "<p>start created date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_max",
            "description": "<p>stop created date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "String",
            "optional": true,
            "field": "original_id",
            "description": "<p>image original ID. Ex: &quot;LBS_P1-701955&quot;</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "collection_id",
            "description": "<p>collection ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "owner_id",
            "description": "<p>owner ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "volunteer_id",
            "description": "<p>volunteer ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "String",
            "size": "2..",
            "optional": true,
            "field": "username_volunteer",
            "description": "<p>username of the volunteer</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "30",
            "description": "<p>number of returned corrections</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>number of offset corrections. Use with limit to create a pagination</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "corrections",
            "description": "<p>list of corrections.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/corrections_Routes.js",
    "groupTitle": "Corrections",
    "name": "GetCorrections",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/corrections"
      }
    ]
  },
  {
    "type": "get",
    "url": "/corrections/ranking",
    "title": "Get the ranking of users",
    "description": "<p>@apiName correctionsGetRanking</p>",
    "group": "Corrections",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "parameter": {
      "fields": {
        "URL Query Parameters": [
          {
            "group": "URL Query Parameters",
            "type": "String",
            "allowedValues": [
              "\"created\"",
              "\"validated\"",
              "\"rejected\""
            ],
            "optional": true,
            "field": "state",
            "description": "<p>state</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "user_id",
            "description": "<p>user ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "owner_id",
            "description": "<p>owner ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "collection_id",
            "description": "<p>collection ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "photographer_id",
            "description": "<p>photographer ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_min",
            "description": "<p>start georef date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_max",
            "description": "<p>stop georef date in ISO 8601 format</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "array",
            "description": "<p>list of ordered users</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/corrections_Routes.js",
    "groupTitle": "Corrections",
    "name": "GetCorrectionsRanking",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/corrections/ranking"
      }
    ]
  },
  {
    "type": "post",
    "url": "/corrections",
    "title": "Submit a title or caption correction",
    "description": "<p>@apiName correctionTitleSubmit</p>",
    "group": "Corrections",
    "permission": [
      {
        "name": "authentified users"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + token JWT</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>user ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "image_id",
            "description": "<p>image ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_value",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"title\"",
              "\"caption\""
            ],
            "optional": false,
            "field": "type",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/corrections_Routes.js",
    "groupTitle": "Corrections",
    "name": "PostCorrections",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/corrections"
      }
    ]
  },
  {
    "type": "put",
    "url": "/corrections/:id",
    "title": "Validator submit a modification of the correction (the new correction is automatically accepted)",
    "description": "<p>@apiName correctionTitleSubmit</p>",
    "group": "Corrections",
    "permission": [
      {
        "name": "authentified users"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + token JWT</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_value",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/corrections_Routes.js",
    "groupTitle": "Corrections",
    "name": "PutCorrectionsId",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/corrections/:id"
      }
    ]
  },
  {
    "type": "put",
    "url": "/corrections/:id/state",
    "title": "Validate or reject the correction",
    "description": "<p>@apiName correctionTitleValidate</p>",
    "group": "Corrections",
    "permission": [
      {
        "name": "authentified users"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + token JWT</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>remark</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/corrections_Routes.js",
    "groupTitle": "Corrections",
    "name": "PutCorrectionsIdState",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/corrections/:id/state"
      }
    ]
  },
  {
    "type": "get",
    "url": "/errors/types",
    "title": "Get list",
    "description": "<p>@apiName listErrorsType</p>",
    "group": "ErrorsType",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "parameter": {
      "fields": {
        "URL Query Parameters": [
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "id",
            "description": "<p>error ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list",
            "description": "<p>of errors</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/errorsType_Routes.js",
    "groupTitle": "ErrorsType",
    "name": "GetErrorsTypes",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/errors/types"
      }
    ]
  },
  {
    "type": "get",
    "url": "/geolocalisations",
    "title": "Get list",
    "description": "<p>@apiName getGeolocalisations</p>",
    "group": "Geolocalisations",
    "permission": [
      {
        "name": "owner_admin, owner_validator"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + token JWT</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Query Parameters": [
          {
            "group": "URL Query Parameters",
            "type": "String",
            "allowedValues": [
              "\"created\"",
              "\"validated\"",
              "\"processed\""
            ],
            "optional": true,
            "field": "state",
            "description": "<p>state of the observation</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "String",
            "optional": true,
            "field": "original_id",
            "description": "<p>original ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "image_id",
            "description": "<p>image ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "collection_id",
            "description": "<p>collection ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_min",
            "description": "<p>start date</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_max",
            "description": "<p>stop date</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "validator_id",
            "description": "<p>validator ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "String",
            "optional": true,
            "field": "user_id",
            "description": "<p>user ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "owner_id",
            "description": "<p>owner ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>of geolocalisations</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/geolocalisations_Routes.js",
    "groupTitle": "Geolocalisations",
    "name": "GetGeolocalisations",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/geolocalisations"
      }
    ]
  },
  {
    "type": "get",
    "url": "/geolocalisations/:id/",
    "title": "Get a geolocalisation",
    "description": "<p>@apiName geolocalisationGetById</p>",
    "group": "Geolocalisations",
    "permission": [
      {
        "name": "owner_admin, owner_validator"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + token JWT</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Path Parameters": [
          {
            "group": "URL Path Parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>geoloc ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "longitude",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "latitude",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "altitude",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "azimuth",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "tilt",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "roll",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "focal",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/geolocalisations_Routes.js",
    "groupTitle": "Geolocalisations",
    "name": "GetGeolocalisationsId",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/geolocalisations/:id/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/geolocalisations/ranking",
    "title": "Get the ranking of users",
    "description": "<p>@apiName geolocalisationsGetRanking</p>",
    "group": "Geolocalisations",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "parameter": {
      "fields": {
        "URL Query Parameters": [
          {
            "group": "URL Query Parameters",
            "type": "String",
            "allowedValues": [
              "\"created\"",
              "\"waiting_validation\"",
              "\"validated\"",
              "\"improved\"",
              "\"rejected\""
            ],
            "optional": true,
            "field": "state",
            "description": "<p>state</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "user_id",
            "description": "<p>user ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "owner_id",
            "description": "<p>owner ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "collection_id",
            "description": "<p>collection ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "photographer_id",
            "description": "<p>photographer ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_min",
            "description": "<p>start georef date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_max",
            "description": "<p>stop georef date in ISO 8601 format</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "array",
            "description": "<p>list of ordered users</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/geolocalisations_Routes.js",
    "groupTitle": "Geolocalisations",
    "name": "GetGeolocalisationsRanking",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/geolocalisations/ranking"
      }
    ]
  },
  {
    "type": "post",
    "url": "/geolocalisations/:id/footprint",
    "title": "Save the footprint",
    "description": "<p>@apiName georefSaveFootprint</p>",
    "group": "Geolocalisations",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "parameter": {
      "fields": {
        "URL Path Parameters": [
          {
            "group": "URL Path Parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>geoloc ID</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "longitude",
            "description": "<p>longitude</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "latitude",
            "description": "<p>latitude</p>"
          },
          {
            "group": "Parameter",
            "type": "Geojson",
            "optional": false,
            "field": "footprint_geojson",
            "description": "<p>Footprint in geojson</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/geolocalisations_Routes.js",
    "groupTitle": "Geolocalisations",
    "name": "PostGeolocalisationsIdFootprint",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/geolocalisations/:id/footprint"
      }
    ]
  },
  {
    "type": "put",
    "url": "/geolocalisations/:id/state",
    "title": "Validate or reject the geolocalisation",
    "name": "Validate_Reject",
    "group": "Geolocalisations",
    "permission": [
      {
        "name": "owner_admin, owner_validator"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + token JWT</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Path Parameters": [
          {
            "group": "URL Path Parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>geoloc ID</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"validated\"",
              "\"updated\"",
              "\"rejected\""
            ],
            "optional": false,
            "field": "state",
            "description": "<p>remark.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "errors_list",
            "description": "<p>list of errors.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "remark",
            "description": "<p>remark.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:1337/georef/validate/"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>image identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/geolocalisations_Routes.js",
    "groupTitle": "Geolocalisations"
  },
  {
    "type": "post",
    "url": "\"/geolocalisations/\"",
    "title": "Start a geolocalisation",
    "description": "<p>if the previousGeolocalisationId is provided, the geolocalisation is an improvement of another geolocalisation. If the validatorId is provided, the geolocalisation is an improvement made by a validator.</p>",
    "name": "georefStart",
    "group": "Geolocalisations",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "image_id",
            "description": "<p>image ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "user_id",
            "description": "<p>user ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "previous_geoloc_id",
            "description": "<p>previous geolocalisation ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>geolocalisation ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/geolocalisations_Routes.js",
    "groupTitle": "Geolocalisations",
    "sampleRequest": [
      {
        "url": "http://localhost:1337\"/geolocalisations/\""
      }
    ]
  },
  {
    "type": "put",
    "url": "/geolocalisations/:id/",
    "title": "Update the orientation",
    "description": "<p>the geolocalisation is finished, if validationMode is true, the geolocalisation is an improvement made by a validator.</p>",
    "name": "georefStop",
    "group": "Geolocalisations",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "parameter": {
      "fields": {
        "URL Path Parameters": [
          {
            "group": "URL Path Parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>geoloc ID</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "image_id",
            "description": "<p>image ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "longitude",
            "description": "<p>longitude</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "latitude",
            "description": "<p>latitude</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "height",
            "description": "<p>height</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "roll",
            "description": "<p>roll [deg]</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "tilt",
            "description": "<p>tilt [deg]</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "azimuth",
            "description": "<p>azimuth [deg]</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "focal",
            "description": "<p>focal [pixel]</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "cx",
            "description": "<p>x coordinate of the image centre</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "cy",
            "description": "<p>y coordinate of the image centre</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "gcps",
            "description": "<p>list of GCP</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "validation_mode",
            "description": "<p>if the update come from the validation or from an update by the user</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "validator_id",
            "description": "<p>ID of the validator</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "user_id",
            "description": "<p>ID of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "previous_geoloc_id",
            "description": "<p>ID of the previous geolocalisation (if the geolocalisation is an improvement)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/geolocalisations_Routes.js",
    "groupTitle": "Geolocalisations",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/geolocalisations/:id/"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/images/:id/lock",
    "title": "Unlock an image",
    "description": "<p>@apiName imagesUnlock</p>",
    "group": "Images",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "parameter": {
      "fields": {
        "URL Path Parameters": [
          {
            "group": "URL Path Parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>image id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Image is unlocked</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/images_Routes.js",
    "groupTitle": "Images",
    "name": "DeleteImagesIdLock",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/images/:id/lock"
      }
    ]
  },
  {
    "type": "get",
    "url": "/images",
    "title": "Get list",
    "description": "<p>@apiName imagesList</p>",
    "group": "Images",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "parameter": {
      "fields": {
        "URL Query Parameters": [
          {
            "group": "URL Query Parameters",
            "type": "Boolean",
            "optional": true,
            "field": "only_unlocked",
            "description": "<p>list only unlocked images</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "String",
            "allowedValues": [
              "\"not_georef\"",
              "\"waiting_validation\"",
              "\"validated\""
            ],
            "optional": true,
            "field": "state",
            "description": "<p>state</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "id",
            "description": "<p>image ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "collection_id",
            "description": "<p>collection ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "owner_id",
            "description": "<p>owner ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "user_id",
            "description": "<p>luser ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "validator_id",
            "description": "<p>validator ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "photographer_id",
            "description": "<p>photographer ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "String",
            "optional": true,
            "field": "original_id",
            "description": "<p>original_id</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Array",
            "optional": true,
            "field": "bbox",
            "description": "<p>bounding box minLong, minLat, maxLong, maxLat. Ex: bbox=[4.345093,44.995918,12.689209,47.982602]</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "String",
            "optional": true,
            "field": "keyword",
            "description": "<p>keywords searched in title, description, original_id. Ex: keyword=Vevey</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "String",
            "optional": true,
            "field": "place_name",
            "description": "<p>names of places visible in the images.Ex: place_name=Vevey</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "String",
            "optional": true,
            "field": "wkt_roi",
            "description": "<p>WKT polygon which intersect the image location or footprint</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Boolean",
            "optional": true,
            "field": "intersect_location",
            "description": "<p>the polygon intersect the image location</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Boolean",
            "optional": true,
            "field": "intersect_footprint",
            "description": "<p>the polygon intersect the image footprint</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_shot_min",
            "description": "<p>start shot date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_shot_max",
            "description": "<p>stop shot date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_inserted_min",
            "description": "<p>start inserted date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_inserted_max",
            "description": "<p>stop inserted date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_georef_min",
            "description": "<p>start georefenced date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_georef_max",
            "description": "<p>stop georefenced date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_validated_min",
            "description": "<p>start validated date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_validated_max",
            "description": "<p>stop validated date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "30",
            "description": "<p>number of returned images</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>number of offset images. Use with limit to create a pagination</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>total of results without offset and limit</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "rows",
            "description": "<p>list of images</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/images_Routes.js",
    "groupTitle": "Images",
    "name": "GetImages",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/images"
      }
    ]
  },
  {
    "type": "get",
    "url": "/images/:id/attributes",
    "title": "Get attributes of an image",
    "description": "<p>@apiName imagesAttributes</p>",
    "group": "Images",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "parameter": {
      "fields": {
        "URL Path Parameters": [
          {
            "group": "URL Path Parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>image id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "image",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/images_Routes.js",
    "groupTitle": "Images",
    "name": "GetImagesIdAttributes",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/images/:id/attributes"
      }
    ]
  },
  {
    "type": "get",
    "url": "/images/:id/lock",
    "title": "Check if image is locked",
    "description": "<p>@apiName imagesLock</p>",
    "group": "Images",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "parameter": {
      "fields": {
        "URL Path Parameters": [
          {
            "group": "URL Path Parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>image id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Image is locked</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/images_Routes.js",
    "groupTitle": "Images",
    "name": "GetImagesIdLock",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/images/:id/lock"
      }
    ]
  },
  {
    "type": "get",
    "url": "/images/mysterious",
    "title": "Get \"mysterious images\" (not geolocated and w/o apriori positions)",
    "description": "<p>@apiName imagesListMysterious</p>",
    "group": "Images",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "parameter": {
      "fields": {
        "URL Query Parameters": [
          {
            "group": "URL Query Parameters",
            "type": "Boolean",
            "optional": true,
            "field": "only_unlocked",
            "description": "<p>list only unlocked images</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "id",
            "description": "<p>image ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "collection_id",
            "description": "<p>collection ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "owner_id",
            "description": "<p>owner ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "user_id",
            "description": "<p>user ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "validator_id",
            "description": "<p>validator ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "photographer_id",
            "description": "<p>photographer ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "original_id",
            "description": "<p>original_id</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "String",
            "optional": true,
            "field": "keyword",
            "description": "<p>keywords searched in title, description, original_id. Ex: keyword=Jungfrau</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_shot_min",
            "description": "<p>start shot date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_shot_max",
            "description": "<p>stop shot date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_inserted_min",
            "description": "<p>start inserted date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_inserted_max",
            "description": "<p>stop inserted date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "30",
            "description": "<p>number of returned images</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>number of offset images. Use with limit to create a pagination</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>total of results without offset and limit</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "rows",
            "description": "<p>list of images</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/images_Routes.js",
    "groupTitle": "Images",
    "name": "GetImagesMysterious",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/images/mysterious"
      }
    ]
  },
  {
    "type": "get",
    "url": "/images/stats",
    "title": "Get number of images per state",
    "description": "<p>@apiName imagesStats</p>",
    "group": "Images",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "parameter": {
      "fields": {
        "URL Query Parameters": [
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "collection_id",
            "description": "<p>collection ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "owner_id",
            "description": "<p>owner ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "user_id",
            "description": "<p>user ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "validator_id",
            "description": "<p>validator ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "photographer_id",
            "description": "<p>photographer ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_shot_min",
            "description": "<p>start shot date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_shot_max",
            "description": "<p>stop shot date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_inserted_min",
            "description": "<p>start inserted date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_inserted_max",
            "description": "<p>stop inserted date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_georef_min",
            "description": "<p>start georefenced date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_georef_max",
            "description": "<p>stop georefenced date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_validated_min",
            "description": "<p>start validated date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_validated_max",
            "description": "<p>stop validated date in ISO 8601 format</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>total of results</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "rows",
            "description": "<p>list of state with a count attribute for each value</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/images_Routes.js",
    "groupTitle": "Images",
    "name": "GetImagesStats",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/images/stats"
      }
    ]
  },
  {
    "type": "post",
    "url": "/images/:id/downloads",
    "title": "Increment download counter",
    "description": "<p>@apiName imagesIncrementDownloads</p>",
    "group": "Images",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "parameter": {
      "fields": {
        "URL Path Parameters": [
          {
            "group": "URL Path Parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>image id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "count",
            "description": "<p>number of downloads</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/images_Routes.js",
    "groupTitle": "Images",
    "name": "PostImagesIdDownloads",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/images/:id/downloads"
      }
    ]
  },
  {
    "type": "post",
    "url": "/images/:id/views",
    "title": "Increment view counter",
    "description": "<p>@apiName imagesIncrementViews</p>",
    "group": "Images",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "parameter": {
      "fields": {
        "URL Path Parameters": [
          {
            "group": "URL Path Parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>image id</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"2d\"",
              "\"3d\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>2D or 3D</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "count",
            "description": "<p>number of views</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/images_Routes.js",
    "groupTitle": "Images",
    "name": "PostImagesIdViews",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/images/:id/views"
      }
    ]
  },
  {
    "type": "put",
    "url": "/images/:id/lock",
    "title": "Lock an image",
    "description": "<p>@apiName imagesLock</p>",
    "group": "Images",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "parameter": {
      "fields": {
        "URL Path Parameters": [
          {
            "group": "URL Path Parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>image id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Image is locked</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/images_Routes.js",
    "groupTitle": "Images",
    "name": "PutImagesIdLock",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/images/:id/lock"
      }
    ]
  },
  {
    "type": "put",
    "url": "/images/:id/state",
    "title": "Update state of image",
    "description": "<p>@apiName imagesUpdateState</p>",
    "group": "Images",
    "permission": [
      {
        "name": "owner_admin, owner_validator"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + token JWT</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Path Parameters": [
          {
            "group": "URL Path Parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>image id</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"not_georef\"",
              "\"waiting_validation\"",
              "\"validated\""
            ],
            "optional": true,
            "field": "state",
            "description": "<p>new state of the image</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "publish",
            "description": "<p>set publish state of image(s)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/images_Routes.js",
    "groupTitle": "Images",
    "name": "PutImagesIdState",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/images/:id/state"
      }
    ]
  },
  {
    "type": "get",
    "url": "/images/nearest",
    "title": "Get nearest images",
    "name": "imagesListNearest",
    "group": "Images",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "parameter": {
      "fields": {
        "URL Query Parameters": [
          {
            "group": "URL Query Parameters",
            "type": "Float",
            "optional": false,
            "field": "longitude",
            "description": ""
          },
          {
            "group": "URL Query Parameters",
            "type": "Float",
            "optional": false,
            "field": "latitude",
            "description": ""
          },
          {
            "group": "URL Query Parameters",
            "type": "Boolean",
            "optional": true,
            "field": "only_unlocked",
            "description": "<p>list only unlocked images</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "String",
            "allowedValues": [
              "\"not_georef\"",
              "\"waiting_validation\"",
              "\"validated\""
            ],
            "optional": true,
            "field": "state",
            "description": "<p>state</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "collection_id",
            "description": "<p>collection ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "owner_id",
            "description": "<p>owner ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "user_id",
            "description": "<p>user ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "validator_id",
            "description": "<p>validator ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "photographer_id",
            "description": "<p>photographer ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "String",
            "optional": true,
            "field": "keyword",
            "description": "<p>keywords searched in title, description, original_id. Ex: keyword=Jungfrau</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_shot_min",
            "description": "<p>start shot date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_shot_max",
            "description": "<p>stop shot date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_inserted_min",
            "description": "<p>start inserted date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_inserted_max",
            "description": "<p>stop inserted date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_georef_min",
            "description": "<p>start georefenced date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_georef_max",
            "description": "<p>stop georefenced date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_validated_min",
            "description": "<p>start validated date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_validated_max",
            "description": "<p>stop validated date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "30",
            "description": "<p>number of returned images</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>number of offset images. Use with limit to create a pagination</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>total of results without offset and limit</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "rows",
            "description": "<p>list of images</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/images_Routes.js",
    "groupTitle": "Images",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/images/nearest"
      }
    ]
  },
  {
    "type": "put",
    "url": "/me/info",
    "title": "Update info",
    "description": "<p>@apiName meUpdateInfo</p>",
    "group": "Me",
    "permission": [
      {
        "name": "authentified user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + token JWT</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "2..",
            "optional": true,
            "field": "username",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "2..",
            "optional": true,
            "field": "first_name",
            "description": "<p>first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "2..",
            "optional": true,
            "field": "last_name",
            "description": "<p>last name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "description": "<p>lang abreviation</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "letter",
            "description": "<p>newsletter acceptation</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/me_Routes.js",
    "groupTitle": "Me",
    "name": "PutMeInfo",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/me/info"
      }
    ]
  },
  {
    "type": "put",
    "url": "/me/password",
    "title": "Update password",
    "description": "<p>@apiName meUpdatePwd</p>",
    "group": "Me",
    "permission": [
      {
        "name": "authentified user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + token JWT</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "2..",
            "optional": false,
            "field": "old_pwd",
            "description": "<p>old password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..",
            "optional": false,
            "field": "new_pwd1",
            "description": "<p>new password. Min length: 6</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..",
            "optional": false,
            "field": "new_pwd2",
            "description": "<p>new password. Min length: 6</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/me_Routes.js",
    "groupTitle": "Me",
    "name": "PutMePassword",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/me/password"
      }
    ]
  },
  {
    "type": "get",
    "url": "/me/geolocalisations",
    "title": "Get geolocalised images",
    "name": "getGeolocalisations",
    "group": "Me",
    "permission": [
      {
        "name": "authentified users"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + token JWT</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>of images</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/me_Routes.js",
    "groupTitle": "Me",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/me/geolocalisations"
      }
    ]
  },
  {
    "type": "get",
    "url": "/me/info",
    "title": "Get info",
    "name": "meInfo",
    "group": "Me",
    "permission": [
      {
        "name": "authentified user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + token JWT</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>user id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>user username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>user first name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>user last name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lang",
            "description": "<p>user lang.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "letter",
            "description": "<p>if the user want the newsletter.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "has_one_validated",
            "description": "<p>if the user has a validated geolocalisation.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "roles",
            "description": "<p>List of roles</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "local_login",
            "description": "<p>if the user account is not facebook or google.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/me_Routes.js",
    "groupTitle": "Me",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/me/info"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/observations/:id",
    "title": "Delete an observation",
    "description": "<p>@apiName observationsDelete</p>",
    "group": "Observations",
    "permission": [
      {
        "name": "owner_admin, owner_validator"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + token JWT</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Path Parameters": [
          {
            "group": "URL Path Parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>observation id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/observations_Routes.js",
    "groupTitle": "Observations",
    "name": "DeleteObservationsId",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/observations/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/observations",
    "title": "Get list",
    "description": "<p>@apiName observationsList</p>",
    "group": "Observations",
    "permission": [
      {
        "name": "authentified users"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + token JWT</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Query Parameters": [
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "id",
            "description": "<p>id of the observation</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "String",
            "allowedValues": [
              "\"created\"",
              "\"validated\"",
              "\"processed\""
            ],
            "optional": true,
            "field": "state",
            "description": "<p>state of the observation</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_min",
            "description": "<p>start date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_max",
            "description": "<p>stop date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "String",
            "optional": true,
            "field": "original_id",
            "description": "<p>image original ID linked to the observation. Ex: &quot;LBS_P1-701955&quot;</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "collection_id",
            "description": "<p>collection ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "owner_id",
            "description": "<p>owner ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "volunteer_id",
            "description": "<p>volunteer ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "String",
            "size": "2..",
            "optional": true,
            "field": "username_volunteer",
            "description": "<p>username of the volunteer</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "observations",
            "description": "<p>list of observations.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/observations_Routes.js",
    "groupTitle": "Observations",
    "name": "GetObservations",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/observations"
      }
    ]
  },
  {
    "type": "get",
    "url": "/observations/ranking",
    "title": "Get the ranking of users",
    "description": "<p>@apiName observationsGetRanking</p>",
    "group": "Observations",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "parameter": {
      "fields": {
        "URL Query Parameters": [
          {
            "group": "URL Query Parameters",
            "type": "Array",
            "allowedValues": [
              "\"created\"",
              "\"validated\"",
              "\"rejected\""
            ],
            "optional": true,
            "field": "state",
            "description": "<p>state</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Array",
            "optional": true,
            "field": "user_id",
            "description": "<p>user ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Array",
            "optional": true,
            "field": "owner_id",
            "description": "<p>owner ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Array",
            "optional": true,
            "field": "collection_id",
            "description": "<p>collection ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Array",
            "optional": true,
            "field": "photographer_id",
            "description": "<p>photographer ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_min",
            "description": "<p>start georef date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_max",
            "description": "<p>stop georef date in ISO 8601 format</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "array",
            "description": "<p>list of ordered users</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/observations_Routes.js",
    "groupTitle": "Observations",
    "name": "GetObservationsRanking",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/observations/ranking"
      }
    ]
  },
  {
    "type": "post",
    "url": "/observations",
    "title": "Submit an observation",
    "description": "<p>@apiName observationSubmit</p>",
    "group": "Observations",
    "permission": [
      {
        "name": "authentified users"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + token JWT</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>user ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "image_id",
            "description": "<p>image ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "coord_x",
            "description": "<p>upper left x coordinate</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "coord_y",
            "description": "<p>upper left y coordinate</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "height",
            "description": "<p>height of the box</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "width",
            "description": "<p>width of the box</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "2..",
            "optional": false,
            "field": "observation",
            "description": "<p>observation</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/observations_Routes.js",
    "groupTitle": "Observations",
    "name": "PostObservations",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/observations"
      }
    ]
  },
  {
    "type": "put",
    "url": "/observations/:id",
    "title": "Update an observation",
    "description": "<p>@apiName observationUpdate</p>",
    "group": "Observations",
    "permission": [
      {
        "name": "authentified users"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + token JWT</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Path Parameters": [
          {
            "group": "URL Path Parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>observation id</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "2..",
            "optional": true,
            "field": "observation",
            "description": "<p>observation description</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "coord_x",
            "description": "<p>upper left x coordinate</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "coord_y",
            "description": "<p>upper left y coordinate</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "height",
            "description": "<p>height of the box</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "width",
            "description": "<p>width of the box</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/observations_Routes.js",
    "groupTitle": "Observations",
    "name": "PutObservationsId",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/observations/:id"
      }
    ]
  },
  {
    "type": "put",
    "url": "/observations/:id/state",
    "title": "Validate or reject an observation",
    "description": "<p>@apiName observationValidate</p>",
    "group": "Observations",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + token JWT</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Path Parameters": [
          {
            "group": "URL Path Parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>observation id</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"validated\"",
              "\"updated\"",
              "\"rejected\""
            ],
            "optional": false,
            "field": "state",
            "description": "<p>new state of the observation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "2..",
            "optional": true,
            "field": "remark",
            "description": "<p>remark of the validator</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "2..",
            "optional": true,
            "field": "observation",
            "description": "<p>observation description field</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "coord_x",
            "description": "<p>upper left x coordinate</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "coord_y",
            "description": "<p>upper left y coordinate</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "height",
            "description": "<p>height of the box</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "width",
            "description": "<p>width of the box</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/observations_Routes.js",
    "groupTitle": "Observations",
    "name": "PutObservationsIdState",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/observations/:id/state"
      }
    ]
  },
  {
    "type": "get",
    "url": "/owners",
    "title": "Get list",
    "description": "<p>@apiName ownersList</p>",
    "group": "Owners",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "parameter": {
      "fields": {
        "URL Query Parameters": [
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "id",
            "description": "<p>owners ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Boolean",
            "optional": true,
            "field": "is_current",
            "description": "<p>filter by current owner</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "owners",
            "description": "<p>list of owners.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/owners_Routes.js",
    "groupTitle": "Owners",
    "name": "GetOwners",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/owners"
      }
    ]
  },
  {
    "type": "get",
    "url": "/owners/:id/stats",
    "title": "Get the stats of an owner",
    "description": "<p>@apiName ownerStats</p>",
    "group": "Owners",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "parameter": {
      "fields": {
        "URL Path Parameters": [
          {
            "group": "URL Path Parameters",
            "type": "integer",
            "optional": false,
            "field": "id",
            "description": "<p>owner ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "ngeoref",
            "description": "<p>number of georeferenced images</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "nimages",
            "description": "<p>number of images</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "nusers",
            "description": "<p>number of users</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/owners_Routes.js",
    "groupTitle": "Owners",
    "name": "GetOwnersIdStats",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/owners/:id/stats"
      }
    ]
  },
  {
    "type": "get",
    "url": "/owners/:slug/info",
    "title": "Get info about an owner",
    "description": "<p>@apiName ownerInfo</p>",
    "group": "Owners",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "parameter": {
      "fields": {
        "URL Path Parameters": [
          {
            "group": "URL Path Parameters",
            "type": "String",
            "size": "2..",
            "optional": false,
            "field": "slug",
            "description": "<p>url abreviation of the owner</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>owner link</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>owner ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "challenge_collection",
            "description": "<p>collection ID of the current challenge</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "name",
            "description": "<p>owner name</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "description",
            "description": "<p>owner deescription</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/owners_Routes.js",
    "groupTitle": "Owners",
    "name": "GetOwnersSlugInfo",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/owners/:slug/info"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/problems/:id",
    "title": "Delete a problem",
    "description": "<p>@apiName problemsDelete</p>",
    "group": "Problems",
    "permission": [
      {
        "name": "owner_admin, owner_validator"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + token JWT</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Path Parameters": [
          {
            "group": "URL Path Parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>problem ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/problems_Routes.js",
    "groupTitle": "Problems",
    "name": "DeleteProblemsId",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/problems/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/problems",
    "title": "Get list",
    "description": "<p>@apiName problemsList</p>",
    "group": "Problems",
    "permission": [
      {
        "name": "authentified users"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + token JWT</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Query Parameters": [
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "id",
            "description": "<p>ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "String",
            "allowedValues": [
              "\"created\"",
              "\"validated\"",
              "\"owner_processed\"",
              "\"admin_processed\""
            ],
            "optional": true,
            "field": "state",
            "description": "<p>state</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_min",
            "description": "<p>start date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_max",
            "description": "<p>stop date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "String",
            "optional": true,
            "field": "original_id",
            "description": "<p>image original ID. Ex: original_id=&quot;LBS_P1-701955&quot;</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "collection_id",
            "description": "<p>collection ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "owner_id",
            "description": "<p>owner ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "volunteer_id",
            "description": "<p>volunteer ID</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "String",
            "size": "2..",
            "optional": true,
            "field": "username_volunteer",
            "description": "<p>username of the volunteer</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "problems",
            "description": "<p>list of problems.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/problems_Routes.js",
    "groupTitle": "Problems",
    "name": "GetProblems",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/problems"
      }
    ]
  },
  {
    "type": "get",
    "url": "/problems/types",
    "title": "Get types",
    "description": "<p>@apiName ListProblemsTypes</p>",
    "group": "Problems",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "id",
            "description": "<p>identifier of the problem type</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>of problems type</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/problems_Routes.js",
    "groupTitle": "Problems",
    "name": "GetProblemsTypes",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/problems/types"
      }
    ]
  },
  {
    "type": "post",
    "url": "/problems",
    "title": "Submit a problem",
    "description": "<p>@apiName problemSubmit</p>",
    "group": "Problems",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + token JWT</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>user ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "image_id",
            "description": "<p>image ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "problem_type_id",
            "description": "<p>id of type of problem</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "2..",
            "optional": false,
            "field": "title",
            "description": "<p>problem title (only if type is other)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "2..",
            "optional": false,
            "field": "description",
            "description": "<p>description of the problem (only if type is other)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/problems_Routes.js",
    "groupTitle": "Problems",
    "name": "PostProblems",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/problems"
      }
    ]
  },
  {
    "type": "put",
    "url": "/problems/:id/state",
    "title": "Update state(s)",
    "description": "<p>@apiName problemsUpdateState</p>",
    "group": "Problems",
    "permission": [
      {
        "name": "owner_admin, owner_validator"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + token JWT</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Path Parameters": [
          {
            "group": "URL Path Parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>problem ID</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"created\"",
              "\"validated\"",
              "\"owner_processed\"",
              "\"admin_processed\""
            ],
            "optional": false,
            "field": "state",
            "description": "<p>new state of the problem</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/problems_Routes.js",
    "groupTitle": "Problems",
    "name": "PutProblemsIdState",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/problems/:id/state"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/users/role",
    "title": "Remove a role from a user",
    "description": "<p>@apiName roles</p>",
    "group": "Users",
    "permission": [
      {
        "name": "super_admin, owner_admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + token JWT</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>users ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"super_admin\"",
              "\"owner_admin\"",
              "\"owner_validator\"",
              "\"volunteer\""
            ],
            "optional": false,
            "field": "role",
            "description": "<p>role to be removed</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/roles_Routes.js",
    "groupTitle": "Users",
    "name": "DeleteUsersRole",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/users/role"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Get list",
    "description": "<p>@apiName usersList</p>",
    "group": "Users",
    "permission": [
      {
        "name": "super_admin, owner_admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + token JWT</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Query Parameters": [
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "id",
            "description": "<p>ID of user</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "String",
            "allowedValues": [
              "\"super_admin\"",
              "\"owner_admin\"",
              "\"owner_validator\"",
              "\"volunteer\""
            ],
            "optional": true,
            "field": "roles",
            "description": "<p>role of users</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_min",
            "description": "<p>start registration date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Date",
            "optional": true,
            "field": "date_max",
            "description": "<p>stop registration date in ISO 8601 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>exact username</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>exact emails</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "String",
            "optional": true,
            "field": "lang",
            "description": "<p>language of the user in ISO 639-1 format</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Boolean",
            "optional": true,
            "field": "letter",
            "description": "<p>if user want to receive the newsletter</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Boolean",
            "optional": true,
            "field": "has_one_validated",
            "description": "<p>user has at least one image validated</p>"
          },
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": true,
            "field": "owner_id",
            "description": "<p>owner ID (only supported if authentifier user is 'super_admin')</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/users_Routes.js",
    "groupTitle": "Users",
    "name": "GetUsers",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/users"
      }
    ]
  },
  {
    "type": "post",
    "url": "/users/role",
    "title": "Promote a user with a new role",
    "description": "<p>@apiName rolesPromotion</p>",
    "group": "Users",
    "permission": [
      {
        "name": "super_admin, owner_admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + token JWT</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>users ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"super_admin\"",
              "\"owner_admin\"",
              "\"owner_validator\"",
              "\"volunteer\""
            ],
            "optional": false,
            "field": "role",
            "description": "<p>new added role</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/roles_Routes.js",
    "groupTitle": "Users",
    "name": "PostUsersRole",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/users/role"
      }
    ]
  },
  {
    "type": "get",
    "url": "/gltf/generateFromDb",
    "title": "Create a GLTF file from the orientation stored in DB",
    "description": "<p>@apiName gltfGenerateFromDb</p>",
    "group": "images3D",
    "permission": [
      {
        "name": "super_admin"
      }
    ],
    "parameter": {
      "fields": {
        "URL Query Parameters": [
          {
            "group": "URL Query Parameters",
            "type": "Integer",
            "optional": false,
            "field": "image_id",
            "description": "<p>image ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/images3D_Routes.js",
    "groupTitle": "images3D",
    "name": "GetGltfGeneratefromdb",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/gltf/generateFromDb"
      }
    ]
  },
  {
    "type": "post",
    "url": "/gltf/copyGltf/",
    "title": "Copy the GLTF",
    "description": "<p>@apiName georefCopyGltf</p>",
    "group": "images3D",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "imageId",
            "description": "<p>image ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "collectionId",
            "description": "<p>collection ID required to save the model in the proper folder</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/images3D_Routes.js",
    "groupTitle": "images3D",
    "name": "PostGltfCopygltf",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/gltf/copyGltf/"
      }
    ]
  },
  {
    "type": "post",
    "url": "/gltf/createGltf/",
    "title": "Save the GLTF (3D model of the image)",
    "description": "<p>@apiName georefCreateGltf</p>",
    "group": "images3D",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "image_id",
            "description": "<p>image ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "collection_id",
            "description": "<p>collection ID required to save the model in the proper folder</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "pose",
            "description": "<p>position of the main points of the images in the camera coordinate system</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/images3D_Routes.js",
    "groupTitle": "images3D",
    "name": "PostGltfCreategltf",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/gltf/createGltf/"
      }
    ]
  },
  {
    "type": "post",
    "url": "/pose/compute",
    "title": "Compute the pose with LM algorithm",
    "description": "<p>@apiName poseCompute</p>",
    "group": "images3D",
    "permission": [
      {
        "name": "everyone"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Real",
            "optional": false,
            "field": "latitude",
            "description": "<p>apriori latitude</p>"
          },
          {
            "group": "Parameter",
            "type": "Real",
            "optional": false,
            "field": "longitude",
            "description": "<p>apriori longitude</p>"
          },
          {
            "group": "Parameter",
            "type": "Real",
            "optional": false,
            "field": "altitude",
            "description": "<p>apriori altitude</p>"
          },
          {
            "group": "Parameter",
            "type": "Real",
            "optional": false,
            "field": "azimuth",
            "description": "<p>apriori azimuth Cesium.Math.toDegrees(scene.camera.heading)</p>"
          },
          {
            "group": "Parameter",
            "type": "Real",
            "optional": false,
            "field": "tilt",
            "description": "<p>apriori tilt Cesium.Math.toDegrees(scene.camera.pitch)</p>"
          },
          {
            "group": "Parameter",
            "type": "Real",
            "optional": false,
            "field": "roll",
            "description": "<p>apriori roll Cesium.Math.toDegrees(scene.camera.roll)</p>"
          },
          {
            "group": "Parameter",
            "type": "Real",
            "optional": false,
            "field": "height",
            "description": "<p>image height</p>"
          },
          {
            "group": "Parameter",
            "type": "Real",
            "optional": false,
            "field": "width",
            "description": "<p>image width</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "locationLocked",
            "description": "<p>if the location must be computed</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "GCPs",
            "description": "<p>Array of GCP with parameters id, x,y,lat,long,height</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>image ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/poseEstimation_Routes.js",
    "groupTitle": "images3D",
    "name": "PostPoseCompute",
    "sampleRequest": [
      {
        "url": "http://localhost:1337/pose/compute"
      }
    ]
  }
] });
