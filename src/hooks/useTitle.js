import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} -Eventshots`;
  }, [title]);
};

export default useTitle;
