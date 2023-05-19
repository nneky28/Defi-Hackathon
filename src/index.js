import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { PersistGate } from "redux-persist/integration/react";
import allReducers from "./Redux/Reducers/Index";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { celoAlfajores, celo } from "wagmi/chains";
//import { alchemyProvider } from "wagmi/providers/alchemy";
//import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

const { chains, provider } = configureChains(
  [celoAlfajores, celo],
  //[alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),publicProvider()]
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: "https://celo-afajores.infura.io/v3/49c0ef025a9a4290894e3c76c1ce8e66",
      }),
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Celo crowdFunding",
  projectId: "YOUR_PROJECT_ID",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const persistConfig = {
  key: "Todo",
  storage,
  whitelist: ["myTodo"], // only navigation will be persisted
};

const persistedReducer = persistReducer(persistConfig, allReducers);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider
            chains={chains}
            modalSize="compact"
            theme={midnightTheme({
              accentColor: "#8054DE",
              accentColorForeground: "white",
              borderRadius: "medium",
              fontStack: "system",
              overlayBlur: "small",
            })}
          >
            <App />
          </RainbowKitProvider>
        </WagmiConfig>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
