export interface WeatherResponseData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  id: number;
  name: string;
  cod: number;
}

export interface GeocodingResponseData {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
}

export interface APIErrorData {
  cod: string;
  message: string;
}

export type GeoResponse = GeocodingResponseData[] | APIErrorData;
export type WeatherResponse = WeatherResponseData | APIErrorData;
