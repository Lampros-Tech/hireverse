import React from "react";
import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";
import Profile from "./xmtp/xmtp";

function LandingPage() {
  const client_ = createClient({
    autoConnect: true,
    provider: getDefaultProvider(),
  });
  return (
    <>
      <WagmiConfig client={client_}>
        <Profile />
      </WagmiConfig>
    </>
  );
}

export default LandingPage;
