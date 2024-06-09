import { useState, useEffect } from "react";
import { getFact } from "../services/getFact";

export const useFact = () => {
  const [fact, setFact] = useState(null);

  function updateFact() {
    getFact().then((newFact) => setFact(newFact));
  }
  useEffect(() => {
    updateFact();
  }, []);
  return { fact, updateFact };
};
