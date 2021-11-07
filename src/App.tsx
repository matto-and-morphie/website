import React, { useState, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import Header from './Header';

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
      <Header progress = {progression}/>
      <Unity
        unityContext={unityContext}
        style={{ height: "90vh"}}
      />
    </div>
  );
}

export default App;
