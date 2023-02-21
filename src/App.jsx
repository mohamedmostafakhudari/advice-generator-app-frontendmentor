import { useState, useEffect } from "react";
import { fetchRandomQuote, fetchInitialQuote } from "./api";
function App() {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function initialQuote() {
      setError(false);
      setLoading(true);
      try {
        const slip = await fetchInitialQuote();
        setQuote(slip);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    initialQuote();
  }, []);
  async function handleReroll() {
    setError(false);
    setLoading(true);
    try {
      const slip = await fetchRandomQuote();
      setQuote(slip);
      console.log(quote);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  return (
    <main>
      <div className="container grid min-h-screen items-center mx-auto px-3 md:px-0">
        <div className="bg-grayishBlue-d relative p-6 pt-10 pb-16 rounded-lg min-h-[300px] md:max-w-lg md:mx-auto">
          <h4 className="text-neonGreen uppercase text-[12px] tracking-[4px] text-center">
            advice{" "}
            <span className="ml-1 tracking-[4px]">
              #{loading ? "" : quote.id}
            </span>
          </h4>
          <blockquote
            cite="https://api.adviceslip.com/advice"
            className="text-white text-quote py-6 text-center"
          >
            “{loading ? "Loading..." : quote.advice}”
          </blockquote>
          <div>
            <picture className="">
              <source
                media="(min-width:768px)"
                srcSet="./assets/images/pattern-divider-desktop.svg"
              />
              <img
                src="./assets/images/pattern-divider-mobile.svg"
                alt="divider"
                className="mx-auto"
              />
            </picture>
          </div>
          <div
            onClick={handleReroll}
            className="bg-neonGreen w-fit p-5 rounded-full absolute left-1/2 top-full -translate-y-1/2 -translate-x-1/2 cursor-pointer duration-200 ease-in-out hover:shadow-dice"
          >
            <img src="./assets/images/icon-dice.svg" alt="dice" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
