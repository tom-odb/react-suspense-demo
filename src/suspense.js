import React, { Component, Timeout } from "react";
import { createResource, createCache } from "simple-cache-provider";

import { LamaList } from "./lamalist";
import { Lama } from "./lama";
import { getLamas, getLama } from "./lamaservice";
import { withCache } from "./withCache";
import { Spinner } from "./spinner";

const cache = createCache();
const resource = {
  getLama: createResource(getLama),
  getLamas: createResource(getLamas)
};

const AsyncLama = props => {
  try {
    const data = resource.getLama.read(cache);

    return <Lama lama={data} />;
  } catch (promise) {
    console.log("still loading");
    throw promise;
  }
};

const Lamas = withCache(({ cache }) => {
  const lamas = resource.getLamas.read(cache);

  return <LamaList lamas={lamas} />;
});

const Loading = ({ ms, children, fallback }) => {
  return (
    <Timeout ms={ms}>
      {didTimeout => {
        console.log(
          new Date().getTime(),
          "in Loader > Timeout, did timeout: ",
          didTimeout
        );
        return didTimeout ? fallback : children;
      }}
    </Timeout>
  );
};

export class SuspenseExample extends Component {
  render() {
    return (
      <div>
        <h2>Lamas with suspense</h2>
        <Loading ms={2000} fallback={<Spinner />}>
          <AsyncLama />
        </Loading>
        <Loading ms={3000} fallback={<Spinner />}>
          <Lamas />
        </Loading>
      </div>
    );
  }
}
