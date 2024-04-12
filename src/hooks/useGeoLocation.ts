import { useState, useEffect } from "react";

interface IGeoLocation {
  latitude: number | null;
  longitude: number | null;
}

const useGeoLocation = (): IGeoLocation => {
  const [geoLocation, setGeoLocation] = useState<IGeoLocation>({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    const successHandler = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      setGeoLocation({ latitude, longitude });
    };

    const errorHandler = () => {
      setGeoLocation({ latitude: null, longitude: null });
    };

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
    } else {
      setGeoLocation({
        latitude: null,
        longitude: null,
      });
    }
  }, []);

  return geoLocation;
};

export default useGeoLocation;
