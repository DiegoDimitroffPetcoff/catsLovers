import { useEffect, useState } from "react";
import { getImg } from "../services/getImg";

export function useImg({ fact }) {
  const [img, setImg] = useState();
  useEffect(() => {
    if (!fact) return;
    getImg({ fact }).then((preImg) => {
      setImg(preImg);
    });
  }, [fact]);

  return { img };
}
