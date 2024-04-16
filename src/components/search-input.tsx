import { fetchGeoAPI } from "../lib/api";

export function Search() {
  return (
    <div className="flex gap-10">
      <input
        id=""
        className="text-zinc-50 bg-transparent"
        type="text"
        onChange={(event) => fetchGeoAPI(event.target.value)}
      />
    </div>
  );
}
