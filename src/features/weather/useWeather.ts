import { useState, useEffect } from "react";
import { IWeatherData } from "./weather.types";
import { DEFAULT_UNITS } from "@/constants";

const BASE_URL = import.meta.env.VITE_API_BASE_URL!;
const API_KEY = import.meta.env.VITE_API_KEY!;

const GENERAL_ERROR = "Something went wrong!";

const useWeather = ({
  q = "",
  longitude,
  latitude,
}: {
  q?: string;
  longitude?: number | null;
  latitude?: number | null;
}) => {
  const [weatherData, setWeatherData] = useState<IWeatherData>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!q && !(longitude && latitude)) {
      return;
    }
    (async () => {
      try {
        const url = new URL(BASE_URL);
        url.search = new URLSearchParams({
          appid: API_KEY,
          units: DEFAULT_UNITS,
          q,
          ...(longitude &&
            latitude && {
              lon: longitude.toString(),
              lat: latitude.toString(),
            }),
        }).toString();
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        }
        setWeatherData(data);
        setError(null);
      } catch (error) {
        setWeatherData(undefined);
        setError((error as Error)?.message || GENERAL_ERROR);
      }
    })();
  }, [q, latitude, longitude]);

  return { weather: weatherData, error };
};

export default useWeather;
