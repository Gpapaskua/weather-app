import Card from "@/components/card";
import { CardHeader } from "@/components/card/card.component";
import {
  evaluatePressure,
  evaluateVisibility,
  getDirectionFromDegrees,
  getHumidityStatus,
  getKilometersFromMeters,
} from "@/utils";
import { IWeatherData } from "./weather.types";

const WeatherHighlights = ({ data }: { data: IWeatherData }) => {
  const {
    main: { humidity, pressure, temp_min: tempMin, temp_max: tempMax },
    visibility,
    wind: { speed, deg },
    sys: { sunrise, sunset },
  } = data;

  const directionFromDegree = getDirectionFromDegrees(deg);
  const humidityStatus = getHumidityStatus(humidity);
  const visibilityInKms = getKilometersFromMeters(visibility);
  const visibilityStatus = evaluateVisibility(visibility);
  const pressureStatus = evaluatePressure(pressure);
  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      <Card>
        <CardHeader>Wind Status</CardHeader>
        <div className="text-3xl mt-2">
          {speed}
          <span className="text-base">km/h</span>
        </div>
        <div className="flex justify-center">
          <div className="px-4 py-2 mx-auto mt-4 text-white flex items-center justify-center bg-blue-600 rounded-lg">
            {directionFromDegree}
          </div>
        </div>
      </Card>
      <Card>
        <CardHeader>Humidity</CardHeader>
        <div className="mt-2">
          <span className="text-3xl mt-2">{humidity}%</span>
        </div>
        <div className="mt-6 text-center">
          <span>{humidityStatus}</span>
        </div>
      </Card>
      <Card>
        <CardHeader>Visibility</CardHeader>
        <div className="mt-2">
          <span className="text-3xl mt-2">{`${visibilityInKms} km`}</span>
        </div>
        <div className="mt-6 text-center">
          <span>{visibilityStatus}</span>
        </div>
      </Card>
      <Card>
        <CardHeader>Pressure</CardHeader>
        <div className="mt-2">
          <span className="text-3xl mt-2">{`${pressure} hPa`}</span>
        </div>
        <div className="mt-6 text-center">
          <span>{pressureStatus}</span>
        </div>
      </Card>
      <Card>
        <CardHeader>{`Sunrise & Sunset`}</CardHeader>
        <div className="mt-4">
          <div className="text-lg font-semibold">
            Sunrise:
            <span className="ml-2">{sunriseTime}</span>
          </div>
          <div className="mt-2 text-lg font-semibold">
            Sunset:
            <span className="ml-2">{sunsetTime}</span>
          </div>
        </div>
      </Card>
      <Card>
        <CardHeader>{`Min & Max`}</CardHeader>
        <div className="mt-4">
          <div className="text-lg font-semibold">
            Min:
            <span className="ml-2">{`${tempMin}`}&#176;C</span>
          </div>
          <div className="mt-2 text-lg font-semibold">
            Max:
            <span className="ml-2">{`${tempMax}`}&#176;C</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default WeatherHighlights;
