import React, { useEffect, useState } from "react";
import { fetchEnsName } from "@wagmi/core";
import { useEnsAddress } from "wagmi";
import { useEnsName } from "wagmi";
import { useEnsAvatar } from "wagmi";
// import { NotificationItem, chainNameType } from "@pushprotocol/uiweb";
// import * as PushAPI from "@pushprotocol/restapi";
import { StreamrClient, StreamPermission } from "streamr-client";
// const { StreamPermission } = fr("streamr-client");
function TempFile() {
  const publishMsg = async () => {
    const streamId = "0x9b4716573622751e7f6a56da251d054b6bba4b00/deh";

    //auth from burner wallet
    const { address, privateKey } = StreamrClient.generateEthereumAccount();

    const streamr = new StreamrClient({
      auth: {
        privateKey: privateKey,
      },
    });

    //{CODe for Granting Permission to Public}////////////////////////////////////////////////////////////
    // const stream = await streamr.getOrCreateStream({
    //   id: "0x9b4716573622751e7f6a56da251d054b6bba4b00/deh",
    // });
    // await stream.grantPermissions({
    //   public: true,
    //   permissions: [StreamPermission.SUBSCRIBE, StreamPermission.PUBLISH],
    // });

    const msg = {
      hello: "Jaydip",
    };
    streamr.publish(streamId, msg);
  };

  return (
    <div style={{ marginTop: "100px" }}>
      {/* <button onClick={() => createStreamer()}>Create Streamer</button>
      <button onClick={() => suscribeStreamer()}>Suscribe Streamer</button> */}
      <button onClick={() => publishMsg()}>publish Stream</button>

      {/* <h3>{data}</h3>
      <h3>{result}</h3> */}
    </div>
  );
}

export default TempFile;
