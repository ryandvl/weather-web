import icon01d from "../../public/weather-conditions/01d@2x.png";
import icon01n from "../../public/weather-conditions/01n@2x.png";
import icon02d from "../../public/weather-conditions/02d@2x.png";
import icon02n from "../../public/weather-conditions/02n@2x.png";
import icon03d from "../../public/weather-conditions/03d@2x.png";
import icon03n from "../../public/weather-conditions/03n@2x.png";
import icon04d from "../../public/weather-conditions/04d@2x.png";
import icon04n from "../../public/weather-conditions/04n@2x.png";
import icon09d from "../../public/weather-conditions/09d@2x.png";
import icon09n from "../../public/weather-conditions/09n@2x.png";
import icon10d from "../../public/weather-conditions/10d@2x.png";
import icon10n from "../../public/weather-conditions/10n@2x.png";
import icon11d from "../../public/weather-conditions/11d@2x.png";
import icon11n from "../../public/weather-conditions/11n@2x.png";
import icon13d from "../../public/weather-conditions/13d@2x.png";
import icon13n from "../../public/weather-conditions/13n@2x.png";
import icon50d from "../../public/weather-conditions/50d@2x.png";
import icon50n from "../../public/weather-conditions/50n@2x.png";

interface ICONSProps {
  [key: string]: string;
}

export const ICONS: ICONSProps = {
  "01d": icon01d,
  "01n": icon01n,
  "02d": icon02d,
  "02n": icon02n,
  "03d": icon03d,
  "03n": icon03n,
  "04d": icon04d,
  "04n": icon04n,
  "09d": icon09d,
  "09n": icon09n,
  "10d": icon10d,
  "10n": icon10n,
  "11d": icon11d,
  "11n": icon11n,
  "13d": icon13d,
  "13n": icon13n,
  "50d": icon50d,
  "50n": icon50n,
};

export function getWeatherCondition(string: string) {
  return ICONS[string];
}
