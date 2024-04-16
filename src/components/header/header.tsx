import ThemeSwitcher from "./theme-switcher";
import { HorizontalSeparator } from "../separators";
import { Search } from "../search-input";

export function Header() {
  return (
    <header className="flex w-full h-20 justify-between items-center pt-16 px-32">
      <a href="/" className="w-40 flex justify-center items-center gap-2">
        <img src="/icon.svg" width={32} height={32} alt="Weather Icon" />
        <span className="font-bold">Weather</span>
      </a>

      <div className="w-64 p-1 focus:size-1 bg-zinc-900 rounded-lg">
        <Search />
      </div>

      <div className="flex justify-center items-center gap-6">
        <div className="flex justify-center items-center gap-3">
          <a
            href="https://openweathermap.org"
            target="_blank"
            rel="noopener"
            className="outline-none rounded-full focus:bg-teal-400 dark:focus:bg-teal-500 focus:text-teal-950 dark:focus:text-teal-50 hover:bg-zinc-400 dark:hover:bg-zinc-500 p-1"
          >
            <img src="/openweathermap-icon.png" width={32} height={32}></img>
          </a>
          <a
            href="https://github.com/ryandvl/weather-web"
            target="_blank"
            rel="noopener"
            className="outline-none rounded-full focus:bg-teal-400 dark:focus:bg-teal-500 focus:text-teal-950 dark:focus:text-teal-50 hover:bg-zinc-400 dark:hover:bg-zinc-500"
          >
            <div className="flex justify-center items-center p-2 rounded-full">
              <svg
                viewBox="0 0 16 16"
                className="size-6"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </div>
          </a>
        </div>

        <HorizontalSeparator />
        <ThemeSwitcher />
      </div>
    </header>
  );
}
