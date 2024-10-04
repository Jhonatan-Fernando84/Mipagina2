import { useEffect } from 'react';

const MapComponent = () => {
  useEffect(() => {
    const loadMapScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCc9_qSgUAICqlq8FcAkNYpzIa77V8Oco0&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    const initMap = () => {
       new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 }, // Cambia estas coordenadas según tus necesidades
        zoom: 8,
      });
    };

    window.initMap = initMap; // Exponer la función initMap al objeto window

    loadMapScript();
  }, []);

  return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
};

export default MapComponent;


