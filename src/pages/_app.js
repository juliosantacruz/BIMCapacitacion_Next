import "../styles/globals.css";
import Layout from "../layout/Layout";
 





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
