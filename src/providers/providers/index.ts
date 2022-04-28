// @ts-ignore
import WalletConnectLogo from "../logos/walletconnect-circle.svg";

import { IProviderInfo } from "../../helpers";

export * from "../injected";

export const WALLETCONNECT: IProviderInfo = {
  id: "walletconnect",
  name: "WalletConnect",
  logo: WalletConnectLogo,
  type: "qrcode",
  check: "isWalletConnect",
  package: {
    required: [["infuraId", "rpc"]]
  }
};
