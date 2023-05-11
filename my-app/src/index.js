import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
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
        http: "https://celo-alfajores.infura.io/v3/49c0ef025a9a4290894e3c76c1ce8e66",
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        modalSize="compact"
        theme={midnightTheme({
          accentColor: "#a054de",
          accentColorForeground: "white",
          borderRadius: "medium",
          fontStack: "system",
          overlayBlur: "small",
        })}
      >
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);

//reportWebVitals();
