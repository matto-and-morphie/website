import React from "react";

function Header(props: { progress: number }) {
  const progress = props.progress;
  return (
    <>
      <p>Unity Game: Matto & Morphie. Loading {progress * 100}%</p>
    </>
  );
}

export default Header;
