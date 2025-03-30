"use client";

import { useEffect, useState } from "react";

export const useRotate = () => {
  const [rotateScreen, setRotateScreen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.innerWidth > window.innerHeight) {
      setRotateScreen(true);
    } else {
      setRotateScreen(false);
    }
  }, []);

  return rotateScreen;
};
