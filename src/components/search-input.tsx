import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import { SearchIcon } from "lucide-react";

import { fetchGeoAPI } from "../lib/api";
import { GeocodingResponseData } from "../types/openweathermap-api/weather-response";

import { normalizeString, removeAccents } from "../utils/string-regex";
import { VerticalSeparator } from "./separators";
import useDebounceValue from "../hooks/use-debounce-value";

interface SearchInputProps {
  variant: "home" | "header";
}

export function SearchInput({ variant }: SearchInputProps) {
  const [search, setSearch] = useState("");
  const [queries, setQueries] = useState<GeocodingResponseData[]>([]);

  const debouncedSearchTerm = useDebounceValue(search, 1000);

  useEffect(() => {
    const executeFunction = async () => {
      const data = await fetchGeoAPI(
        normalizeString(debouncedSearchTerm).replace(/test/g, "")
      );

      if (data == false) return;

      setQueries(data);
    };

    if (debouncedSearchTerm) {
      executeFunction();
    }
  }, [debouncedSearchTerm]);

  function handleButtonDialogOpen() {
    const dialog = document.getElementById("search-input") as HTMLDialogElement;

    dialog.showModal();
  }

  function handleDialogOnClick(event: React.MouseEvent<HTMLDialogElement>) {
    const dialog = event.target as HTMLDialogElement;

    const { left, right, top, bottom } = dialog.getBoundingClientRect();

    if (
      event.clientX < left ||
      event.clientX > right ||
      event.clientY < top ||
      event.clientY > bottom
    ) {
      dialog.close();
    }
  }

  return (
    <>
      <dialog
        onClick={handleDialogOnClick}
        className="bottom-40 w-2/6 rounded-lg p-10 border-2 border-zinc-500 dark:border-zinc-800 bg-slate-200 dark:bg-zinc-950 backdrop:bg-zinc-950/50"
        id="search-input"
        autoCorrect="false"
      >
        <div className="flex flex-col gap-5">
          <div className="flex justify-center items-center gap-4">
            <SearchIcon
              size={24}
              className="text-zinc-950 dark:text-zinc-400"
            />
            <input
              type="search"
              placeholder="Search..."
              autoFocus
              onChange={(event) => setSearch(event.target.value)}
              className="w-full bg-transparent outline-none text-zinc-900 dark:text-zinc-100 placeholder-zinc-500"
            />
          </div>
          {search.length && queries.length ? (
            <>
              <VerticalSeparator length="100%" />
              {queries.map((query, key) => {
                const querriesMap = [
                  encodeURIComponent(removeAccents(query.name ?? "undefined")),
                  encodeURIComponent(removeAccents(query.state ?? "undefined")),
                  encodeURIComponent(
                    removeAccents(query.country ?? "undefined")
                  ),
                ];

                return (
                  <a
                    href={`/?q=${querriesMap
                      .filter((q) => q !== "undefined")
                      .join(",")}`}
                    key={key}
                    className="flex justify-start items-center gap-5 size-full outline-none p-3 focus:bg-lime-300 dark:focus:bg-lime-500 hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors rounded-md"
                  >
                    <span className="w-36 text-black dark:text-white font-bold">
                      {query.name ?? "Unknown"}
                    </span>
                    <span className="w-80 text-zinc-700 dark:text-zinc-300">
                      {query.state ?? "Unknown"}
                    </span>
                    <span className="text-zinc-600 dark:text-zinc-500 font-semibold">
                      {query.country ?? "Unknown"}
                    </span>
                  </a>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </div>
      </dialog>
      <button
        onClick={handleButtonDialogOpen}
        className={twMerge(
          "flex justify-center items-center w-60 h-12 p-1 rounded-lg gap-2 transition-colors duration-500 outline-none focus:bg-teal-400 dark:focus:bg-teal-500 group",
          variant == "home"
            ? "bg-blue-500 dark:bg-blue-700 hover:bg-blue-400 dark:hover:bg-blue-500"
            : "bg-zinc-200 dark:bg-zinc-900 hover:bg-zinc-400 dark:hover:bg-zinc-500"
        )}
      >
        <SearchIcon
          size={24}
          className={
            variant == "home"
              ? "text-blue-900 dark:text-zinc-300 group-focus:text-zinc-50 group-hover:text-zinc-100"
              : "text-zinc-900 dark:text-zinc-100 group-focus:text-zinc-50 group-hover:text-zinc-100"
          }
        />
        <span
          className={
            variant == "home"
              ? "text-blue-950 dark:text-blue-200 group-focus:text-zinc-50 group-hover:text-zinc-100"
              : "text-zinc-950 dark:text-zinc-50 group-focus:text-zinc-50 group-hover:text-zinc-100"
          }
        >
          Open Search Dialog
        </span>
      </button>
    </>
  );
}
