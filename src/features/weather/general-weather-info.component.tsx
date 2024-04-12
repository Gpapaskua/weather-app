import { IWeatherData } from "./weather.types";

const GeneralWeatherInfo = ({ data }: { data: IWeatherData }) => {
  const {
    main: { temp: temperature, feels_like: feelsLike, sea_level: seaLevel },
    dt,
    weather: [{ description = "", main = "", icon = "" } = {}] = [],
    name,
  } = data;

  return (
    <>
      <div className="mt-6">
        <div className="h-[100px] relative">
          <img
            src={`http://openweathermap.org/img/w/${icon}.png`}
            className="absolute w-full h-full object-contain"
            alt={main}
          />
        </div>
        <p className="text-center">{main}</p>
        <div className="flex flex-col gap-1 my-2">
          <span className="text-2xl font-semibold">
            {`${temperature}`}&#176;C
          </span>
          <span>
            {new Date(dt * 1000).toLocaleString("en-US", {
              weekday: "long",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
          <span>{`Feels like: ${feelsLike}`}&#176;C</span>
          {seaLevel != null && <span>{`Sea Level: ${seaLevel} hPa`}</span>}
        </div>
      </div>
      <hr />
      <div className="mt-2">
        <span className="capitalize">{description}</span>
        <p className="font-bold text-lg text-center mt-5">{name}</p>
      </div>
    </>
  );
};

export default GeneralWeatherInfo;
