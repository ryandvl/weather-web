import { MapPinIcon, WavesIcon, WindIcon } from "lucide-react";

import { setTitle } from "../utils/set-title";

import { WeatherResponseData } from "../types/openweathermap-api/weather-response";

interface InformationsProps {
  data: WeatherResponseData;
}

export function Informations({ data }: InformationsProps) {
  setTitle(`${data.name}, ${data.sys.country}`);

  return (
    <main className="flex justify-center items-center">
      <div className="flex flex-col bg-blue-400/50 dark:bg-blue-400/10 rounded-xl p-12 gap-12">
        <div className="flex justify-center items-center gap-2 text-xl">
          <MapPinIcon size={32} className="text-red-500 dark:text-red-400" />
          <span className="font-extrabold text-black dark:text-white">
            {data.name}, {data.sys.country}
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={`/weather-conditions/${data.weather[0].icon}@2x.png`} />
          <span className="text-2xl font-bold">
            {Math.floor(data.main.temp)}°c
          </span>
        </div>
        <div className="flex justify-between items-center gap-12">
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-2">
              <WavesIcon
                size={24}
                className="text-zinc-950 dark:text-zinc-500"
              />
              <span className="text-zinc-900 dark:text-zinc-300">Humidity</span>
            </div>
            <span className="text-zinc-950 dark:text-zinc-50">
              {data.main.humidity}%
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-2">
              <WindIcon
                size={24}
                className="text-zinc-950 dark:text-zinc-500"
              />
              <span className="text-zinc-900 dark:text-zinc-300">
                Wind Speed
              </span>
            </div>
            <span className="text-zinc-950 dark:text-zinc-50">
              {Math.floor(data.wind.speed)} km/h
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
