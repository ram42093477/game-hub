import { useState, useEffect } from "react";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  bimage: string;
  pplat: { platform: Platform }[]; // ✅ Keeps platform structure
  metacritic: number;
}

// ✅ Fix: Correct API endpoint
const useGames = () => useData<Game>("games");

export default useGames;
