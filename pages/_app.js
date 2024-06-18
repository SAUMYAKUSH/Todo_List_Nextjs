import Header from "@/Components/Header/Header";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";

function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default App;
