import { ArrowLeftIcon } from "lucide-react";

export function BackToHomepage() {
  return (
    <a
      href="/"
      className="flex justify-center items-center gap-3 outline-none rounded-md p-5 bg-emerald-300 dark:bg-emerald-500 focus:bg-teal-400 dark:focus:bg-teal-500 focus:text-teal-950 dark:focus:text-teal-50 hover:bg-emerald-400 dark:hover:bg-emerald-700 transition-colors duration-300"
    >
      <ArrowLeftIcon
        size={24}
        className="text-emerald-800 dark:text-emerald-900"
      />
      <span className="text-emerald-800 dark:text-emerald-950">
        Back to homepage
      </span>
    </a>
  );
}
