import { useCallback, useEffect, useState } from "react";
import type { BaseLocationHook } from "wouter";

// 元サイトと同じハッシュルーティング。
// 現在地は location.hash から、遷移は location.hash の書き換えで行う。
const currentLoc = () => "/" + window.location.hash.replace(/^#?\/?/, "");

export const useHashLocation: BaseLocationHook = () => {
  const [loc, setLoc] = useState(currentLoc());

  useEffect(() => {
    const handler = () => setLoc(currentLoc());
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const navigate = useCallback((to: string) => {
    window.location.hash = to;
  }, []);

  return [loc, navigate];
};
