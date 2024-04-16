import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { fetchWeatherAPI } from "./lib/api";

import { Header } from "./components/header/header";
import { Loading } from "./components/pages/loading";
import { NotFound } from "./components/pages/not-found";
import { Informations } from "./components/pages/informations";

import { WeatherResponseData } from "./types/openweathermap-api/weather-response";
import { Home } from "./components/pages/home";

export function App() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<WeatherResponseData | null>(null);
  const [error, setError] = useState<"internal" | "not-found" | null>(null);

  useEffect(() => {
    const fetchAPI = async () => {
      if (!id?.length) return;

      setIsLoading(true);

      const responseData = await fetchWeatherAPI(id);

      if (responseData == false) {
        setError("internal");
      } else if (typeof responseData == "string") {
        setError("not-found");
      } else {
        setData(responseData as WeatherResponseData);
      }

      setIsLoading(false);
    };

    fetchAPI();
  }, [id]);

  if (searchParams.size > 0) {
    const url = new URL(window.location.toString());

    url.search = "";

    if (searchParams.has("id")) {
      url.searchParams.set("id", searchParams.get("id") as string);
    }

    window.history.pushState({}, "", url);
  }

  return (
    <div className="flex flex-col gap-24">
      <Header />
      {(() => {
        if (isLoading) {
          return <Loading />;
        } else if (error) {
          return <NotFound error={error} />;
        } else if (data) {
          return <Informations data={data} />;
        } else {
          return <Home />;
        }
      })()}
    </div>
  );
}
