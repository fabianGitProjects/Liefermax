import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css"
import Layout from "@/komponenten/Layout";
import "../styles/custom.scss";
import store from "@/redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ToastContainer/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
