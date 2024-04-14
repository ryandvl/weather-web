export function Search() {
  async function fetchAPI(value: string) {
    const { VITE_OPENWEATHERMAP_API_KEY } = import.meta.env;

    if (!value.length) return;

    const response = await fetch(
      "http://api.openweathermap.org/geo/1.0/direct?q=" +
        encodeURIComponent(value) +
        "&limit=5&appid=" +
        VITE_OPENWEATHERMAP_API_KEY
    );
    const data = await response.json();

    console.log(data);
  }

  return (
    <div className="flex gap-10">
      <input
        id=""
        className="text-zinc-950 bg-dark-blue"
        type="text"
        onChange={(event) => fetchAPI(event.target.value)}
      />
    </div>
  );
}
