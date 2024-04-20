import { useEffect, useState } from "react";
import { MapPinIcon } from "lucide-react";

import { setTitle } from "../utils/set-title";

import { SearchInput } from "../components/search-input";
import { VerticalSeparator } from "../components/separators";

import { WeatherResponseData } from "../types/openweathermap-api/weather-response";
import { fetchWeatherAPI } from "../lib/api";
import { getWeatherCondition } from "../utils/weather-conditions";

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<WeatherResponseData>();

  useEffect(() => {
    const fetchAPI = async () => {
      const responseData = await fetchWeatherAPI("2988507");

      if (responseData !== false || typeof responseData !== "string") {
        const finalData = responseData as WeatherResponseData;
        setData(finalData);
      }

      setIsLoading(false);
    };

    fetchAPI();
  }, []);

  setTitle("Home");

  return (
    <main className="flex justify-center items-center">
      <div className="flex justify-between w-4/5 h-[40rem] bg-blue-600/30 dark:bg-blue-800/30 rounded-xl p-32 transition-colors duration-500">
        <div className="flex flex-col gap-10">
          <span className="max-w-[30rem] text-5xl font-extrabold text-black dark:text-white">
            Check Earth's diverse climates!
          </span>

          <VerticalSeparator length="50%" stroke="3px" />

          <div className="flex gap-3">
            <span className="max-w-96 text-zinc-800 dark:text-zinc-300">
              Search for cities or states to view about climate! Explore
              interactive maps and articles, tap in the{" "}
              <span className="font-semibold text-blue-700 dark:text-blue-500">
                button down
              </span>{" "}
              to get started!
            </span>
          </div>

          <div className="flex w-4/5 justify-center mt-5">
            <SearchInput variant="home" />
          </div>
        </div>

        <div className="w-72 h-full rounded-md flex justify-start items-start p-10 bg-white/80 dark:bg-zinc-50/90 border-2 border-zinc-400 dark:border-zinc-800 transition-colors duration-500">
          {isLoading ? (
            <div className="w-full flex justify-start items-center gap-2">
              <div className="w-full h-16 bg-zinc-300 rounded-md" />
            </div>
          ) : (
            <div className="w-full flex flex-col gap-5">
              <div className="w-full flex justify-start items-center gap-2">
                <MapPinIcon size={48} className="text-yellow-400" />
                <div className="flex flex-col">
                  <div className="flex justify-start items-center gap-2">
                    <span className="text-zinc-950 font-bold text-2xl">
                      Paris
                    </span>
                    <span className="text-zinc-900 text-base">FR</span>
                  </div>
                  <span className="text-zinc-900 text-base">Ile-de-France</span>
                </div>
              </div>

              <VerticalSeparator length="100%" />

              <div className="flex flex-col justify-center items-center">
                <img
                  src={getWeatherCondition(data!.weather[0].icon)}
                  className="size-32"
                ></img>

                <span className="text-2xl font-bold text-zinc-950">
                  {data!.main.temp.toFixed()}°c
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
