import ThemeSwitcher from "./theme-switcher";
import { HorizontalSeparator } from "../separators";
import { GithubIcon } from "lucide-react";

export function Header() {
  return (
    <header className="flex w-full h-20 justify-end items-center py-16 px-32">
      <div className="flex justify-center items-center gap-6">
        <a
          href="https://github.com/ryandvl/weather-web"
          target="_blank"
          rel="noopener"
          className="outline-none rounded-full focus:bg-teal-400 dark:focus:bg-teal-500 focus:text-teal-950 dark:focus:text-teal-50 hover:bg-zinc-400 dark:hover:bg-zinc-500"
        >
          <div className="flex justify-center items-center p-2 rounded-full">
            <GithubIcon size={24} />
          </div>
        </a>

        <HorizontalSeparator />
        <ThemeSwitcher />
      </div>
    </header>
  );
}
