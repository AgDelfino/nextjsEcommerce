import "../styles/globals.css";
import StatesWrapper from "../components/StatesWrapper";

export default function App({ Component, pageProps }) {
  return (
    <StatesWrapper>
      <Component {...pageProps} />
    </StatesWrapper>
  );
}
