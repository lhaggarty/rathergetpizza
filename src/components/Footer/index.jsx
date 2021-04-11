import React from "react";
import loadable from "@loadable/component";
import Loading from "../../components/Loading/Loading.jsx";

const LoadableComponent = loadable(() => import("./Footer"));

function LoadableFooter() {
    return <LoadableComponent />;
};

export default LoadableFooter;
