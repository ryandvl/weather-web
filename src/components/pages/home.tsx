import { setTitle } from "../../utils/set-title";
import { SearchInput } from "../search-input";
import { VerticalSeparator } from "../separators";

export function Home() {
  setTitle("Home");

  return (
    <main className="flex justify-center items-center">
      <div className="flex justify-between w-4/5 h-[40rem] bg-indigo-500/40 dark:bg-indigo-500/20 rounded-xl p-32 transition-colors duration-500">
        <div className="flex flex-col gap-10">
          <span className="max-w-[30rem] text-5xl font-extrabold text-black dark:text-white">
            Check Earth's diverse climates!
          </span>

          <VerticalSeparator length="50%" stroke="3px" />

          <div className="flex gap-3">
            <span className="max-w-96 text-zinc-700 dark:text-zinc-300">
              Search for cities or states to view about climate! Explore
              interactive maps and articles, tap in the{" "}
              <span className="font-semibold text-blue-700 dark:text-blue-500">
                button down
              </span>{" "}
              to get started!
            </span>
          </div>

          <div className="flex w-4/5 justify-center mt-5">
            <SearchInput variant="home" />
          </div>
        </div>

        <div className="">
          <span className="duration-0">Test</span>
        </div>
      </div>
    </main>
  );
}
