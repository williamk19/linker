export default function DarkMode() {
  return (
    <div className="flex flex-row items-center mb-9 gap-1">
      <span className="text-xl">☀️</span>
      <label className="relative inline-block h-8 w-16" htmlFor="checkbox">
        <input
        className="hidden"
          type="checkbox"
          id="checkbox"
        />
      <div className="absolute cursor-pointer bottom-0 left-0 right-0 top-0 bg-gray-300
      rounded-full
      transition before:bg-white before:h-6 before:absolute before:w-6 before:top-1 before:left-1.5 before:content-[''] before:transition before:rounded-full"></div>
      </label>
      <span className="text-xl">🌒</span>
    </div>
  )
}
