import { MapPinOffIcon } from "lucide-react";

import { setTitle } from "../utils/set-title";
import { BackToHomepage } from "../components/back-to-homepage";

interface NotFoundProps {
  error: "internal" | "not-found" | null;
}

export function NotFound({ error }: NotFoundProps) {
  setTitle("Not Found");

  return (
    <main className="w-full h-[30rem] flex justify-center items-center">
      <div className="bg-blue-400/10 rounded-xl p-12">
        {error == "not-found" ? (
          <div className="flex justify-between items-center gap-20">
            <MapPinOffIcon
              size={128}
              className="text-red-400 dark:text-red-500 animate-pulse"
            />
            <div className="flex flex-col justify-center items-center gap-10">
              <div className="flex flex-col justify-center items-center gap-2">
                <span className="font-bold text-2xl">
                  City or State not found
                </span>
                <span className="text-zinc-500 dark:text-zinc-400">
                  Check if the ID is correct, or back to homepage.
                </span>
              </div>

              <BackToHomepage />
            </div>
          </div>
        ) : (
          <span>Internal Server Error, please try again.</span>
        )}
      </div>
    </main>
  );
}
