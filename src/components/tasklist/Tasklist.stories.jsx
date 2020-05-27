import Tasklist from "./Tasklist";
import React from "react";
import { Wrapper } from "../../utils/testing";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";

export default {
  title: "<Tasklist>",
  component: Tasklist,
};

export const Default = () => (
  <Wrapper>
    <Tasklist />
  </Wrapper>
);
