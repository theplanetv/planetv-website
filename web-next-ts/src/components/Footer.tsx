export default function Footer(): JSX.Element {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 PlanetV Website. Released under the{" "}
          <a href="https://github.com/theplanetv/planetv-website/blob/main/LICENSE" className="hover:underline">
            MIT License
          </a>.
        </span>
      </div>
    </footer>
  );
}

