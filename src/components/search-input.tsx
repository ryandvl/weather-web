import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import { SearchIcon } from "lucide-react";

import { fetchGeoAPI } from "../lib/api";
import { GeocodingResponseData } from "../types/openweathermap-api/weather-response";

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
        debouncedSearchTerm
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/test/g, "")
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
        className="w-2/6 rounded-lg p-3 border-2 border-zinc-600 dark:border-zinc-800 bg-slate-300 dark:bg-zinc-950 backdrop:bg-zinc-950/50 transition-transform"
        id="search-input"
      >
        <div className="flex flex-col gap-5">
          <div className="flex justify-center items-center gap-4">
            <SearchIcon size={24} className="text-zinc-400" />
            <input
              type="text"
              placeholder="Search..."
              autoFocus
              onChange={(event) => setSearch(event.target.value)}
              className="w-full bg-transparent outline-none text-zinc-100 placeholder-zinc-500"
            />
          </div>
          {search.length && queries.length && (
            <>
              <VerticalSeparator length="100%" />
              {queries.map((query, key) => {
                return (
                  // `${query.name},${query.state},${query.country}`
                  <a href="" key={key} className="size-full">
                    <span className="text-zinc-50">{query.name}</span>
                  </a>
                );
              })}
            </>
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
