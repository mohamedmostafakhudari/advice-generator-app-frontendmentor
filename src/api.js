import axios from "axios";
export async function fetchInitialQuote() {
  try {
    const {
      data: { slip },
    } = await axios.get("https://api.adviceslip.com/advice");
    return slip;
  } catch (err) {
    console.log(err);
  }
}
export async function fetchRandomQuote() {
  try {
    const {
      data: { slip },
    } = await axios.get("https://api.adviceslip.com/advice?t=" + Math.random());
    return slip;
  } catch (err) {
    console.log(err);
  }
}
