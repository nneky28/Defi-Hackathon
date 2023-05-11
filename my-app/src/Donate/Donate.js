import { ConnectButton } from "@rainbow-me/rainbowkit";
import "./Donate.css";
import "../SignUp/Form.css";

export const Donate = () => {
  return (
    <div className="Donate--Container">
      <nav className="NavBar">
        <div className="crypto">
          <img
            className="cryptoLogo"
            src="/images/cryptoLogo (1).webp"
            alt="logo"
          ></img>
        </div>

        <div className="walletConnect">
          <ConnectButton className="wallet" chainStatus="name" />
        </div>
      </nav>
    </div>
  );
};
