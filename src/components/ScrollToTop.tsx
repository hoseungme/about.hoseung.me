import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const ScrollToTop: React.FC = ({ children }) => {
  const history = useHistory();

  useEffect(() => {
    return history.listen(() => {
      if (history.action !== "POP") {
        window.scrollTo(0, 0);
      }
    });
  }, [history]);

  return <>{children}</>;
};
