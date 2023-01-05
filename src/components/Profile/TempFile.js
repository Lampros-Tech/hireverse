import React, { useEffect, useState } from "react";
import { fetchEnsName } from "@wagmi/core";
import { useEnsAddress } from "wagmi";
import { useEnsName } from "wagmi";
import { useEnsAvatar } from "wagmi";
import { NotificationItem, chainNameType } from "@pushprotocol/uiweb";
import * as PushAPI from "@pushprotocol/restapi";
function TempFile() {
  // const { data, isError, isLoading } = useEnsAddress({
  //   name: "brantly.eth",
  // });

  // const { data, isError, isLoading } = useEnsAvatar({
  //   address: "0x1e45950438AB25778a3EEE0Cbcd6621cAaE5Ea1C",
  // });

  const checkSusbcription = async () => {
    // await getuseraddress();
    // const subscriptions = await PushAPI.user.getSubscriptions({
    //   user: "eip155:42:0x408402f30618a6985c56cf9608e04cea12cddc37", // user address in CAIP
    //   env: "staging",
    // });

    const subscriptions = await PushAPI.user.getSubscriptions({
      user: "eip155:42:0xD8634C39BBFd4033c0d3289C4515275102423681", // user address in CAIP
      env: "staging",
    });

    var flag = false;
    console.log(subscriptions);
    // console.log(subscriptions[0].channel);
    // console.log(subscriptions[1].channel);
    // console.log(subscriptions[2].channel);

    if (subscriptions === undefined) {
      return false;
    }
    for (let i = 0; i < subscriptions.length; i++) {
      if (
        subscriptions[i].channel ===
        "0xfaabb044AF5C19145cA4AE13CA12C419395A72FB"
      ) {
        flag = true;
      }
    }
    return flag;
  };

  // const { data, isError, isLoading } = useEnsAvatar({
  //   address: "0x6Ea2D65538C1eAD906bF5F7EdcfEa03B504297ce",
  //   chainId: 5,
  // });
  //   const { data, isError, isLoading } = useEnsAddress({
  //     name: "0xbhadresh.eth",
  //   });

  // 0x1e45950438AB25778a3EEE0Cbcd6621cAaE5Ea1C
  // const [result, setResult] = useState();
  // const ensName = useEnsName({
  //   address: "0x6Ea2D65538C1eAD906bF5F7EdcfEa03B504297ce",
  //   chainId: 5,
  //   onSuccess(data) {
  //     setResult(data);
  //     console.log("Success", data);
  //   },
  //   onError(error) {
  //     console.log("Error", error);
  //   },
  // });

  // useEffect(() => {
  //   setResult(data);
  //   console.log(result);
  //   console.log(data);
  // }, [data]);
  return (
    <div style={{ marginTop: "100px" }}>
      <button onClick={() => checkSusbcription()}>Check</button>
      {/* <h3>{data}</h3>
      <h3>{result}</h3> */}
    </div>
  );
}

export default TempFile;
