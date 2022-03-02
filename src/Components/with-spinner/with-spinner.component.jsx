import React from "react";
import {SpinnerOverlay, SpinnerContainer} from "./with-spinner.styles";

const WithSpinner = () =>(
    <SpinnerOverlay>
        <SpinnerContainer />
    </SpinnerOverlay>
);

export default WithSpinner;