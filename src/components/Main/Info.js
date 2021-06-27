/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Trainers from "../Trainers/Trainers";
import React,{useState} from "react";
import Button from "../GlobalComponents/Button";

const Info = () => {
  const [state,setState]=useState('classes');
  return(
  <div css={styles} className="info">
    <p>YOU ARE SAFE,BUT</p>
    <h1>
      NEVER RISK YOUR<span> POWER</span>
    </h1>
    <Button text="PRODUCTS"  className={state === "classes" ? "active" : ""} onClick={()=>setState("classes")}/>
    
  </div>
)};

const styles = css`
  width: 100%;
  max-width: 900px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
  color: #fff;
  p {
    font-size: 17px;
    line-height: 1;
    font-weight: 900;
    letter-spacing: 1.2px;
  }
  h1 {
    font-size: 90px;
    line-height: 1;
    font-weight: 900;
    margin: 36px 0;
    span {
      color: #ed563b;
    }
  }
  .btn {
    padding: 14px 16px;
  }
  @media (max-width: 1000px) {
    h1 {
      font-size: 42px;
    }
  }
`;

export default Info;
