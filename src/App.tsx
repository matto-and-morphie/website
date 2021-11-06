import React, { useState, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "build/build.loader.js",
  dataUrl: "build/build.data",
  frameworkUrl: "build/build.framework.js",
  codeUrl: "build/build.wasm",
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
      <Unity
        unityContext={unityContext}
        matchWebGLToCanvasSize={false}
        style={{ height: "100vh" }}
      />
    </div>
  );
}

export default App;
