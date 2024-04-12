import { useState } from "react";
import SearchIcon from "@/assets/icon-search.svg?react";
import { debounce } from "@/utils";
import useGeoLocation from "@/hooks/useGeoLocation";
import useWeather from "@/features/weather/useWeather";
import Input from "@/components/input";
import GeneralWeatherInfo from "@/features/weather/general-weather-info.component";
import WeatherHighlights from "@/features/weather/weather-highlights.component";

function App() {
  const { latitude, longitude } = useGeoLocation();
  const [search, setSearch] = useState("");

  const { weather, error } = useWeather({
    q: search,
    longitude,
    latitude,
  });

  return (
    <div className="flex flex-col md:flex-row min-h-[100vh] bg-gray-100">
      <div className="w-full md:w-[20rem] md:min-w-[20rem] pt-4 px-8 bg-white pb-8">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <SearchIcon className="h-4 w-4" />
            </div>
            <Input
              className="block w-full p-4 ps-8"
              placeholder="Search for places..."
              defaultValue={search}
              onChange={debounce((e) => setSearch(e.target.value), 400)}
            />
          </div>
        </form>
        {weather && <GeneralWeatherInfo data={weather} />}
      </div>
      <div className="flex-grow">
        <div className="p-8">
          <p className="text-2xl text-bold">Today's Highlights</p>
          {weather ? (
            <WeatherHighlights data={weather} />
          ) : (
            <p className="text-center mt-10">
              {error || "Start Searching to see results"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
