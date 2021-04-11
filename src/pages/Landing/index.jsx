import React from "react";
import loadable from "@loadable/component";
import Loading from "../../components/Loading/Loading.jsx";

const LoadableComponent = loadable(() => import("./Landing"), {
  fallback: <Loading />
});

function LoadableLanding() {
    return <LoadableComponent />;
};

export default LoadableLanding;
