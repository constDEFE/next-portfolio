import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "../contexts/ThemeProvider";
import { getInitialTheme } from "../contexts/ThemeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider initialTheme={getInitialTheme()}>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
