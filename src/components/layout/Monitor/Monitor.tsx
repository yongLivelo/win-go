export default function Monitor() {
  const ballNumbers = Array.from({ length: 75 }, (_, i) => i + 1).reduce(
    (acc: Record<string, number[]>, curr) => {
      const key = ["B", "I", "N", "G", "O"][Math.floor((curr - 1) / 15)];
      acc[key].push(curr);
      return acc;
    },
    { B: [], I: [], N: [], G: [], O: [] },
  );

  return (
    <>
      <div className="flex h-full flex-col rounded border-4">
        {Object.keys(ballNumbers).map((letter) => (
          <div key={letter} className="flex flex-1">
            <div className="flex flex-1 items-center justify-center">
              {letter}
            </div>
            {ballNumbers[letter].map((number) => (
              <div
                key={number}
                className="flex flex-1 items-center justify-center"
              >
                {number}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
