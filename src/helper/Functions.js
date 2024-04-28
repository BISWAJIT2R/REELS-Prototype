import { useEffect } from "react";

export const GsapStartFuntion = (cmd) => {
  if (cmd === "ok") {
    return true;
  }

  return false;
};

export const responsive = () => {
  let moblie = false;
  let desktop = false;
  if (window.innerWidth < "640") {
    moblie = true;
  } else {
    desktop = true;
  }

  return { moblie, desktop };
};

