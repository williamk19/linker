export default function Footer({ darkMode }) {
    return (
        <div className="flex flex-col items-center mt-16 pb-8 flex-shrink-0">
            {darkMode ? (
                <h4 className="text-lg font-light text-white">Linker</h4>
            ) : (
                <h4 className="text-lg font-light text-black">Linker</h4>
            )}
        </div>
    );
}
