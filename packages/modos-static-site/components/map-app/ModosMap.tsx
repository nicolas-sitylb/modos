/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/no-require-imports */
import { CRS, LatLng, LeafletMouseEvent } from 'leaflet';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { LayersControl, Map, TileLayer, WMSTileLayer } from 'react-leaflet';
import { useI18N } from '../../libs';
import {
  IMapnvFeature,
  translateSwissGridCoordinateToLatLng
} from '../../libs/mapnv-api';
import {
  getEvents,
  getSimpleItinerary,
  OBSTACLES_TYPE
} from '../../libs/modos-api';
import { LeafletCustomControl } from './LeafletCustomControl';
import styles from './map.module.scss';
import { MapNavbar } from './MapNavbar';
import MapnvAccessibilityLayer from './MapnvAccessibilityLayer';
import { NavigationPanel } from './NavigationPanel';
import { ObservationInfoPanel } from './ObservationInfoPanel';
import ObservationsLayerGroup from './ObservationsLayerGroup';

const ModosMap = () => {
  const [displayNavPanel, setDisplayNavPanel] = useState(false);
  const [currentSearchedPoint, setCurrentSearchedPoint] = useState('');
  const [navPanelLocation, setNavPanelLocation] = useState({
    from: null,
    to: null
  });
  const [itinerary, setItinerary] = useState({
    generatedDate: Date.now(), // We need a generated date to force react-leaflet to re-render the geojson
    geojson: null
  });
  const [displayObservationPanel, setDisplayObersvationPanel] = useState(false);
  const [currentSelectedObservation, setCurrentSelectedObservation] = useState(
    undefined
  );
  const [eventID, setEventID] = useState(undefined);

  const START_POSITION = new LatLng(46.7833, 6.65);
  const START_ZOOM = 15;

  // ------------ EVENT MANAGEMENT FOR NAVIGATION PANEL

  const onSearchingLocation = (point: 'from' | 'to') => {
    setDisplayNavPanel(false);
    setCurrentSearchedPoint(point);
  };

  const onChooseLocationOnMap = (evt: LeafletMouseEvent) => {
    if (currentSearchedPoint !== '') {
      const currLocation = navPanelLocation;
      currLocation[currentSearchedPoint] = evt.latlng;
      setNavPanelLocation({ ...navPanelLocation, ...currLocation });
      setDisplayNavPanel(true);
    }
  };

  const onChooseLocationByText = (evt: IMapnvFeature, point: string) => {
    const currLocation = navPanelLocation;
    currLocation[point] = translateSwissGridCoordinateToLatLng(evt);
    setNavPanelLocation({ ...navPanelLocation, ...currLocation });
  };

  const onSubmitLocation = (evt: Event) => {
    evt.preventDefault();

    const currLocation = navPanelLocation;
    getSimpleItinerary(
      [currLocation.from.lat, currLocation.from.lng],
      [currLocation.to.lat, currLocation.to.lng]
    )
      .then(result =>
        setItinerary({ generatedDate: Date.now(), geojson: result })
      )
      .catch(err => console.error(err))
      .finally(() => setDisplayNavPanel(false));
  };

  // ------------- EVENT MANAGEMENT FOR OBSERVATION PANEL

  const onObservationClick = observation => {
    setCurrentSelectedObservation(observation);
    setDisplayObersvationPanel(true);
  };

  const onObservationInfoPanelExit = () => {
    setCurrentSelectedObservation(null);
    setDisplayNavPanel(false);
  };

  return (
    <div id={styles['map-app']}>
      <MapNavbar
        onClickToggleNavPanel={() => setDisplayNavPanel(!displayNavPanel)}
      />

      <div id={styles['map-app-container']}>
        {displayNavPanel && (
          <NavigationPanel
            id={styles['map-app-navigation-panel']}
            onClickExit={() => setDisplayNavPanel(false)}
            onClickFrom={() => onSearchingLocation('from')}
            onClickTo={() => onSearchingLocation('to')}
            onChooseFrom={evt => onChooseLocationByText(evt, 'from')}
            onChooseTo={evt => onChooseLocationByText(evt, 'to')}
            onSubmitLocation={evt => onSubmitLocation(evt)}
            location={navPanelLocation}></NavigationPanel>
        )}

        {displayObservationPanel && currentSelectedObservation && (
          <ObservationInfoPanel
            id={styles['map-app-observation-panel']}
            observation={currentSelectedObservation}
            onClickExit={() => onObservationInfoPanelExit()}
          />
        )}

        <Map
          id={styles.map}
          center={START_POSITION}
          zoom={START_ZOOM}
          // crs={CRS.EPSG4326}
          onclick={onChooseLocationOnMap}>

          <LayersControl position='bottomleft'>
            <LayersControl.BaseLayer checked name='Carte'>
              <TileLayer
                url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              />
            </LayersControl.BaseLayer>

            <LayersControl.BaseLayer name='Satellite'>
              <TileLayer
                url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
                attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
              />
            </LayersControl.BaseLayer>

            <LayersControl.Overlay name='Observations' checked={true}>
              <ObservationsLayerGroup
                eventID={eventID}
                onObservationClick={onObservationClick}
              />
            </LayersControl.Overlay>

            {/* Bellow are layer and control for navigation, don't remove it */}

            {/* <LayersControl.Overlay
              name='Marqueurs de navigation'
              checked={true}
            >
              <NavLayerGroup
                from={navPanelLocation.from}
                to={navPanelLocation.to}
              />
            </LayersControl.Overlay> */}

            {/* <LayersControl.Overlay name='Itineraire' checked={true}>
              {itinerary?.geojson &&
                <GeoJSONLayer
                  key={itinerary.generatedDate}
                  data={itinerary.geojson}
                />
              }
            </LayersControl.Overlay> */}

            {/* Bellow are control any layer for accessibility, don't remove it */}

            {/* <LayersControl.Overlay name='Accessibilité' checked={true}>
              <MapnvAccessibilityLayer />
            </LayersControl.Overlay> */}
          </LayersControl>

          <Events onChange={eEventID => setEventID(eEventID)} />

          <Legends />
        </Map>
      </div>
    </div>
  );
};

export default ModosMap;

const Legends = () => {
  const i18n = useI18N('map');

  return (
    <LeafletCustomControl
      id={styles['map-legends']}
      className={styles['map-legends']}
      position='bottomright'>
      {Object.values(OBSTACLES_TYPE).map(
        type =>
          type !== OBSTACLES_TYPE.UNLABELLED &&
          type !== OBSTACLES_TYPE.NOPROBLEM && (
            <div key={type}>
              <img src={`/assets/${type}-icon.png`} />
              <span>{i18n(type)}</span>
            </div>
          )
      )}
    </LeafletCustomControl>
  );
};

const Events = (props: any) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents()
      .then(result => {
        setEvents(result);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <LeafletCustomControl id='map-events' position='topright'>
      {events && events.length > 0 && (
        <Form.Control
          onChange={event => props.onChange(event.target.value)}
          as='select'
          size='sm'
          custom
          placeholder='Evénements'>
          <option value=''>Choisissez un évenement</option>
          {events?.map(event => (
            <option value={event.id} key={event.id}>
              {event.title}
            </option>
          ))}
        </Form.Control>
      )}
    </LeafletCustomControl>
  );
};
