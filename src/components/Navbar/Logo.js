/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const Logo = () => (
  <h2 css={styles}>
    <span>T</span>AND<span>S</span>
  </h2>
);

const styles = css`
  color: #fff;
  font-size: 30px;
  font-weight: 900;
  line-height: 1;
  cursor: pointer;
  span {
    color: #ed563b;
  }
  &:hover {
    
    transform:scale(1.1,1.1);
  }
`;

export default Logo;
