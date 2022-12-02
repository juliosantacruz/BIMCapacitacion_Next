import "../styles/globals.css";
import Layout from "../components/Layout";
import { ContextProvider } from "../hooks/useContext";





function MyApp({ Component, pageProps }) {
  

  
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}

export default MyApp;
