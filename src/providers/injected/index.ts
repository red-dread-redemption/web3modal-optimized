import { IProviderInfo } from "../../helpers";

// @ts-ignore
import Web3DefaultLogo from "../logos/web3-default.svg";
// @ts-ignore
import MetaMaskLogo from "../logos/metamask.svg";
// @ts-ignore
import BraveLogo from "../logos/brave.svg";

export const FALLBACK: IProviderInfo = {
  id: "injected",
  name: "Web3",
  logo: Web3DefaultLogo,
  type: "injected",
  check: "isWeb3"
};

export const METAMASK: IProviderInfo = {
  id: "injected",
  name: "MetaMask",
  logo: MetaMaskLogo,
  type: "injected",
  check: "isMetaMask"
};

export const OPERA: IProviderInfo = {
  id: "injected",
  name: "Opera",
  logo: Web3DefaultLogo,
  type: "injected",
  check: "isOpera"
};

export const BRAVE: IProviderInfo = {
  id: "injected",
  name: "Brave",
  logo: Web3DefaultLogo,
  type: "injected",
  check: "isBraveWallet"
};
