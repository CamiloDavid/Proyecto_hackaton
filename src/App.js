import React from 'react';
import './App.css';
import MapView from './MapView';
import { data_imagen } from './datos_principal';
import prueba from './prueba.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Departamento del Cauca</h1>
      </header>
      <div className="container">
        <div className="left-column">
          {/* Contenido adicional en la columna izquierda */}
          <p><img src={prueba} style={{width: '100%', height: 'auto'}} /></p>
          <p><h3>DEPARTAMENTO DEL CAUCA</h3></p>
            {data_imagen.map((image, index) => (
              <div key={index}>
                <p>{image.texto}</p>
                <img src={image.direccion} alt={image.texto} style={{ width: '100%', height: 'auto' }} />
              </div>
            ))}
        
        </div>
        <div className="right-column">
          <MapView /> {/* Componente que muestra el mapa */}
        </div>
      </div>
    </div>
  );
}

export default App;
