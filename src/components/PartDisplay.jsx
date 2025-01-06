function PartDisplay({ part, total, character, setCharacter }) {
  function handleClick(i) {
    setCharacter({ ...character, [part]: i });
  }

  return (
    <div className=" block mb-20 md:w-[60%] ml-auto">
      <h2 className="text-center font-bold text-xl mb-5">
        {part.toUpperCase()}
      </h2>
      <div className="flex flex-wrap justify-center gap-4 bg-fuchsia-100 p-4 rounded-lg">
        {Array.from({ length: total - 1 }).map((_, i) => (
          <img
            className={`w-[100px] h-auto cursor-pointer rounded-lg bg-fuchsia-200 hover:bg-fuchsia-300 ${
              character[part] == i + 1 ? "bg-fuchsia-400" : ""
            }`}
            key={`${part}-${i + 1}`}
            src={`/character/${part}/${i + 1}.png`}
            alt={`Image ${i + 1}`}
            onClick={() => handleClick(i + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default PartDisplay;
