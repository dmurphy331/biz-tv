/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const bottomBanner = css`
  background-color: green;
`;

const BottomBanner = () => {
  return (
    <div>
      <div css={bottomBanner}>Bottom Banner</div>
    </div>
  );
};

export default BottomBanner;
