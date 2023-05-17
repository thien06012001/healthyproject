import React, { useEffect, useState, ReactNode, useRef } from "react";

type Props = {
    url: string;
};
function useScript(url: string) {
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;

    document.body.appendChild(script);
    scriptRef.current = script;
    return () => {
      if (scriptRef.current) {
        document.body.removeChild(scriptRef.current);
        scriptRef.current = null;
      }
    };
  }, [url]);
}
function Chatbox({}: Props) {
 

//   useScript(url);
  return (
    <div>
      <h1>Chat bot</h1>
      
    </div>
  );
}

export default Chatbox;
