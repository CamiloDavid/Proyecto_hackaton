import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { municipios } from './diccionario';

// Corrige los íconos rotos
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapView = () => {
    return (
        <MapContainer center={[2.45, -76.61]} zoom={10} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {municipios.map((municipio, index) => (
                <Marker key={index} position={municipio.posicion}>
                    {/* Tooltip para mostrar el nombre del municipio en el marcador */}
                    <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
                        {municipio.nombre}
                    </Tooltip>

                    <Popup>
                        <strong>{municipio.nombre}</strong><br />
                        {municipio.reseña}<br />
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <img src={municipio.imagen} alt={municipio.nombre} style={{ width: '48%', height: 'auto' }} />
                            <img src={municipio.imagen1} alt={municipio.nombre} style={{ width: '48%', height: 'auto' }} />
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default MapView;
