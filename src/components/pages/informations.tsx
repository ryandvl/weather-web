import { MapPinIcon } from "lucide-react";
import { WeatherResponseData } from "../../types/openweathermap-api/weather-response";

interface InformationsProps {
  data: WeatherResponseData;
}

export function Informations({ data }: InformationsProps) {
  return (
    <main className="flex justify-center items-center">
      <div className="bg-blue-400/10 rounded-xl p-12">
        <div className="flex items-center gap-2 text-xl">
          <MapPinIcon size={32} className="text-red-500 dark:text-red-400" />
          <span className="font-extrabold text-black dark:text-white">
            {data.name}
          </span>
        </div>
      </div>
    </main>
  );
}
