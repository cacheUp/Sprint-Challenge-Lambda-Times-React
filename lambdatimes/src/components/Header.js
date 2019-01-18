/**@jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const headerSpan = css`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
`;

const headerTemp = css`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;

const headerDate = css`
  margin-left: 25px;
  flex: 1;
`;

const HeaderOne = css`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <div css={header}>
      <span css={headerDate} css={headerSpan}>
        SMARCH 32, 2018
      </span>
      <h1 css={HeaderOne}>Lambda Times</h1>
      <span css={headerDate} css={headerSpan}>
        98°
      </span>
    </div>
  );
};

export default Header;
