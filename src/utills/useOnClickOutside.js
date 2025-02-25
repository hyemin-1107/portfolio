import { useEffect } from "react";

export const useOnClickOutside = (ref, handler) =>{
    useEffect(() =>{
        const outSideClick = (e) =>{
          if(!ref.current || ref.current.contains(e.target) ) return;
        // 외부클릭감지
            handler();
        };
        document.addEventListener("mousedown", outSideClick);
        // 언마운트시 이벤트 삭제하여 성능 향상
        return () =>{
            document.addEventListener("mousedown", outSideClick);
        }
      }, [ref, handler]);
}