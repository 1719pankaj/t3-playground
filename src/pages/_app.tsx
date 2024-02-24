import { type AppType } from "next/app";

import { api } from "playground/utils/api";

import "playground/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
