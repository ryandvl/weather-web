import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { fetchWeatherAPI } from "./lib/api";

import { Header } from "./components/header/header";
import { Loading } from "./components/pages/loading";
import { NotFound } from "./components/pages/not-found";
import { Informations } from "./components/pages/informations";

import { WeatherResponseData } from "./types/openweathermap-api/weather-response";
import { Home } from "./components/pages/home";
import { removeAccents } from "./utils/string-regex";

export function App() {
  const [searchParams] = useSearchParams();
  const [id, query] = [searchParams.get("id"), searchParams.get("q")];

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<WeatherResponseData | null>(null);
  const [error, setError] = useState<"internal" | "not-found" | null>(null);
  const [page, setPage] = useState("home");

  useEffect(() => {
    const fetchAPI = async () => {
      if (query?.length) {
        setIsLoading(true);

        const responseData = await fetchWeatherAPI(
          removeAccents(query.split(",").join()),
          true
        );

        const url = new URL(window.location.toString());
        if (responseData !== false && typeof responseData !== "string") {
          url.search = `?id=${(responseData as WeatherResponseData).id}`;
          window.history.pushState({}, "", url);

          setData(responseData as WeatherResponseData);
          setPage("informations");
        } else {
          url.search = "";
          window.history.pushState({}, "", url);
        }

        return setIsLoading(false);
      }

      if (!id?.length) return;

      setIsLoading(true);

      const responseData = await fetchWeatherAPI(id);

      if (responseData == false) {
        setError("internal");
        setPage("not-found");
      } else if (typeof responseData == "string") {
        setError("not-found");
        setPage("not-found");
      } else {
        setData(responseData as WeatherResponseData);
        setPage("informations");
      }

      setIsLoading(false);
    };

    fetchAPI();
  }, [id, query]);

  if (searchParams.size > 1) {
    const url = new URL(window.location.toString());

    url.search = "";

    if (searchParams.has("id")) {
      url.searchParams.set("id", searchParams.get("id") as string);
    } else if (searchParams.has("q")) {
      url.searchParams.set("q", searchParams.get("q") as string);
    }

    window.history.pushState({}, "", url);
  }

  return (
    <div className="flex flex-col gap-24">
      <Header showSearchInput={isLoading || page !== "home"} />
      {(() => {
        if (isLoading) {
          return <Loading />;
        } else if (page == "not-found") {
          return <NotFound error={error} />;
        } else if (page == "informations" && data) {
          return <Informations data={data} />;
        } else {
          return <Home />;
        }
      })()}
    </div>
  );
}
