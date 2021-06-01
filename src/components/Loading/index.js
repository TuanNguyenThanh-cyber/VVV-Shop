import React from "react";
import PulseLoader from "react-spinners/PulseLoader";
import { css } from "@emotion/core";

const override = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: white;
`;

export function Loading() {
  return (
    <PulseLoader color={"#027492"} size={25} css={override}>
      Loading
    </PulseLoader>
  );
}
