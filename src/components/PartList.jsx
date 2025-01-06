import PartDisplay from "./PartDisplay";

function PartList({ total, character, setCharacter }) {
  return (
    <div className="w-full">
      {Object.entries(total).map(([part, value]) => (
        <PartDisplay
          key={part}
          part={part}
          total={value}
          character={character}
          setCharacter={setCharacter}
        />
      ))}
    </div>
  );
}

export default PartList;
