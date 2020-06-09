import React from "react";
import { css } from "@emotion/core";
import BottomBanner from "./components/BottomBanner/BottomBanner";
import SideBanner from "./components/SideBanner/SideBanner";
import MainBanner from "./components/MainBanner/MainBanner";

const App = () => {
  return (
    <div css={global}>
      <div>
        <MainBanner />
        <SideBanner />
      </div>
      <div>
        <BottomBanner />
      </div>
    </div>
  );
};

const global = css``;

export default App;
