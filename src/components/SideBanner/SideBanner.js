/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const sideBanner = css`
  background-color: blue;
`;

const SideBanner = () => {
  return (
    <div>
      <div css={sideBanner}>Side Banner</div>
    </div>
  );
};

export default SideBanner;
