import React, { useEffect, useState } from "react";
import "./ScrollToTop.css";

import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import { useWindowScroll } from "react-use";

const ScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pageYOffset]);

  if (!visible) {
    return false;
  }

  const scrollToTop = () => window.scroll({top: 0, behavior: 'smooth'})

  return (
    <div class="scroll-to-top cursor-pointer text-center" onClick={scrollToTop}>
      <ExpandLessIcon style={{color: 'white', fontSize: 40, animation: 'scrollTop 0.5s alternate ease infinite'}} />
    </div>
  );
};

export default ScrollToTop;
