import React from "react";
import loadable from "@loadable/component";
import Loading from "../../components/Loading/Loading.jsx";

const LoadableComponent = loadable(() => import("./Listen"), {
  fallback: <Loading />
});

function LoadableListen() {
    return <LoadableComponent />;
};

export default LoadableListen;
