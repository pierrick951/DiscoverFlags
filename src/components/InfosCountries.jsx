export default function ModalContent({ country, close }) {
    return (
        <div
            onClick={close}
            className="fixed z-10 top-0 left-0 w-full h-full bg-zinc-800 flex justify-center items-center"
        >
            <div
                onClick={e => e.stopPropagation()}
                className=" md:min-w-[500px]  relative rounded-xl p-7 bg-gray-200 shadow-xl shadow-black"
            >
                <button
                    onClick={close}
                    className="animate-pulse   absolute top-2 right-1 w-8 h-8 flex items-center justify-center text-sm text-white bg-red-500 rounded-xl py-2 px-2 shadow-black shadow-md mx-1 "
                >
                    X
                </button>
                <h2 className="text-lg lg:text-2xl mb-4 font-bold text-zinc-800 break-words">Here is {country.name.common}'s information</h2>
                <p className="text-lg mb-2">
                    <span className=" text-red-500 font-bold">Languages(s)</span>
                    : {Object.values(country.languages).join(", ")}
                </p>
                <p className="text-lg mb-2">
                    <span className="  text-red-500 font-bold">Capital</span> : {country.capital[0]}
                </p>
                <p className="text-lg mb-2">
                    <span className=" text-red-500 font-bold">Population</span> : {country.population}
                </p>
                <p className="text-lg mb-2">
                    <span className=" text-red-500 font-bold break-words">Timezones</span> : {country.timezones.join(", ")}
                </p>
                <p className="text-lg mb-2">
                    <span className=" text-red-500 font-bold">Continents</span> : {country.continents.join(", ")}
                </p>
                

            </div>
        </div>
    );
}
