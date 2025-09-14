"use client";
import React, { useEffect, useRef, useState } from "react";

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

// This component is deprecated and no longer used. The splash screen concept has been removed.
export default function SplashScreen() {
  return null;
}
