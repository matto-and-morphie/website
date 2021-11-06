import React, { useState, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "build/build.loader.js",
  dataUrl: "build/build.data.br",
  frameworkUrl: "build/build.framework.js.br",
  codeUrl: "build/build.wasm.br",
});

function App() {
  const [progression, setProgression] = useState(0);

  useEffect(function () {
    unityContext.on("progress", function (progression) {
      setProgression(progression);
    });
  }, []);

  return (
    <div>
      <p>Loading {progression * 100} percent...</p>
      <Unity unityContext={unityContext} />
    </div>
  );
}

export default App;
