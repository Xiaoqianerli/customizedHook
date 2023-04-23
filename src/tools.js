import { useEffect, useState } from "react";

export function usegetIndex(i) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log("2==>");
    setIndex(i);
  });
  console.log("1==>");
  return index;
}
