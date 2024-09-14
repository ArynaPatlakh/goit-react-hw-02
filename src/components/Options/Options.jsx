export default function Options({ update, total, reset }) {
  return (
    <div>
      <button onClick={() => update("good")}>Good</button>
      <button onClick={() => update("neutral")}> Neutral</button>
      <button onClick={() => update("bad")}>Bad</button>
      {total !== 0 && <button onClick={reset}>RESET</button>}
    </div>
  );
}
