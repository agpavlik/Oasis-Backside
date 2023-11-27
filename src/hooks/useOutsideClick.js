import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  // Whenever the click event happens outside of StyledModal,
  // then manually select this element using a ref.
  // First of all, check if ref exists, check ref.current,
  // where the DOM node will be stored.
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }
      //event listener for any click events
      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}
