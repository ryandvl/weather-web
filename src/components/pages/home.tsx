import { setTitle } from "../../utils/set-title";

export function Home() {
  setTitle("Home");

  return (
    <main className="flex justify-center items-center">
      <div className="bg-blue-400/10 rounded-xl p-12">
        <span className="font-extrabold text-black dark:text-white">HOME</span>
      </div>
    </main>
  );
}
