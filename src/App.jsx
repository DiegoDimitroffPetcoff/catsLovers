import { useFact } from "./hooks/useFact";
import { useImg } from "./hooks/useImg";

export const App = () => {
  const { fact, updateFact } = useFact();
  const { img } = useImg({ fact });

  function handleClick() {
    updateFact();
  }

  return (
    <><header>
      <img src="catsLoveIcon.png" alt="logo cats love"/>
    </header>
    <main>
      {fact ? (
        <section>
          <article>
            <img src={img} alt={`Img got by the next text: ${fact}`} />
          </article>
          <article>
            <button onClick={handleClick}>Get New fact</button>
          </article>
          <p>{fact}</p>
        </section>
      ) : (
        "Loading..."
      )}
    </main></>
  );
};
