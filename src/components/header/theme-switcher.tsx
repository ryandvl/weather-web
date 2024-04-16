import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function ThemeSwitcher() {
  const [active, setActive] = useState(false);
  const [cooldown, setCooldown] = useState(false);

  useEffect(() => {
    setActive(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  useEffect(() => {
    if (active) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [active]);

  function handleThemeSwitcher() {
    if (cooldown) return;

    setCooldown(true);

    setActive(!active);

    setTimeout(() => {
      setCooldown(false);
    }, 1000);
  }

  const spinIcon = cooldown ? "animate-spin" : "";

  return (
    <button
      onClick={handleThemeSwitcher}
      className="size-10 flex justify-center items-center outline-none focus:bg-teal-400 dark:focus:bg-teal-500 hover:bg-zinc-600 dark:hover:bg-zinc-500 bg-blue-500 dark:bg-blue-900 rounded-md cursor-pointer group"
    >
      {active ? (
        <MoonIcon
          size={24}
          className={twMerge(
            "text-orange-300 group-focus:text-orange-200 fill-current",
            spinIcon
          )}
        />
      ) : (
        <SunIcon
          size={24}
          className={twMerge(
            "text-yellow-300 group-focus:text-yellow-200 fill-current",
            spinIcon
          )}
        />
      )}
    </button>
  );
}
