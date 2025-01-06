function CharacterDisplay({ character, getRandomCharacter, setCharacter }) {
  return (
    <div className="mb-20 md:mb-0 mx-auto md:fixed">
      <div className="w-[300px] h-[400px] relative md:ml-20">
        {Object.entries(character).map(([part, value]) => (
          <img
            className="w-[300px] h-auto absolute"
            key={part}
            src={`/public/character/${part}/${value}.png`}
            alt={`Image ${value}`}
          />
        ))}
      </div>
      <div className="flex justify-center md:w-[300px] md:ml-20">
        <button
          className="mx-auto text-white bg-fuchsia-800 hover:bg-fuchsia-700 px-4 py-2 rounded-lg"
          onClick={() => setCharacter(getRandomCharacter())}
        >
          Randomize
        </button>
      </div>
    </div>
  );
}

export default CharacterDisplay;
