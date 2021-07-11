import leaflet from "leaflet";
import hospitalIcon from './local_hospital_white.svg';

const ProviderMarkerIcon = new leaflet.Icon({
    iconUrl: hospitalIcon,
    iconRetinaUrl: hospitalIcon,
    iconAnchor: new leaflet.Point(0, 0),
    popupAnchor: new leaflet.Point(15, 0),
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new leaflet.Point(30, 30),
    className: 'providers-map__marker-icon'
});

export default ProviderMarkerIcon;
