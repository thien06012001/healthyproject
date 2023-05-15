import React from "react";
import dynamic from "next/dynamic";

function CrispChatbot() {
  const CrispWithNoSSR = dynamic(() => import("./crisp"), {
    ssr: false,
  });
  return <CrispWithNoSSR />;
}

export default CrispChatbot;
