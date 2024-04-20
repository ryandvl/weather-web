import { MapPinIcon } from "lucide-react";

import { setTitle } from "../utils/set-title";

import { WeatherResponseData } from "../types/openweathermap-api/weather-response";
import { getWeatherCondition } from "../utils/weather-conditions";

interface InformationsProps {
  data: WeatherResponseData;
}

export function Informations({ data }: InformationsProps) {
  setTitle(`${data.name}, ${data.sys.country}`);

  return (
    <main className="flex justify-center items-center">
      <div className="bg-blue-400/10 rounded-xl p-12">
        <div className="flex items-center gap-2 text-xl">
          <MapPinIcon size={32} className="text-red-500 dark:text-red-400" />
          <span className="font-extrabold text-black dark:text-white">
            {data.name}
          </span>
          <img src={getWeatherCondition(data!.weather[0].icon)}></img>
          <span className="text-zinc-500">{data!.main.temp.toFixed()}°c</span>
        </div>
      </div>
    </main>
  );
}
