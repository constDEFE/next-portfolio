import { getInitialTheme } from "../contexts/ThemeContext";
import type { AppProps } from "next/app";
import { ThemeProvider } from "../contexts/ThemeProvider";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider initialTheme={getInitialTheme()}>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
