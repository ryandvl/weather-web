import {
  APIErrorData,
  WeatherResponse,
} from "../types/openweathermap-api/weather-response";

const API_BASE_URL = "https://api.openweathermap.org";
const { VITE_OPENWEATHERMAP_API_KEY } = import.meta.env;

export async function fetchGeoAPI(query: string) {
  if (!query.length) return;

  const url = new URL(API_BASE_URL + "/geo/1.0/direct");

  url.searchParams.set("q", encodeURIComponent(query));
  url.searchParams.set("limit", "5");
  url.searchParams.set("appid", VITE_OPENWEATHERMAP_API_KEY);

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export async function fetchWeatherAPI(id: string) {
  if (!id.length) return false;

  const url = new URL(API_BASE_URL + "/data/2.5/weather");

  url.searchParams.set("id", encodeURIComponent(id));
  url.searchParams.set("units", "Metric");
  url.searchParams.set("appid", VITE_OPENWEATHERMAP_API_KEY);

  try {
    const response = await fetch(url);

    const data = (await response.json()) as WeatherResponse;

    if (data.cod == 404) return (data as APIErrorData).message;

    return data;
  } catch (err) {
    return false;
  }
}
