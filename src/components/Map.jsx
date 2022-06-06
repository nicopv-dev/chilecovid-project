import { useCallback, useState, memo } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

function Map({ countrySelected }) {
  const [map, setMap] = useState(null);
  console.log(countrySelected);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  const onLoad = useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds(coordinates);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback((map) => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerClassName="w-full trasition-all duration-300"
      mapContainerStyle={{ height: "100vh" }}
      center={{
        lat: countrySelected.countryInfo.lat,
        lng: countrySelected.countryInfo.long,
      }}
      zoom={4}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker
        position={{
          lat: countrySelected.countryInfo.lat,
          lng: countrySelected.countryInfo.long,
        }}
      />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default memo(Map);
