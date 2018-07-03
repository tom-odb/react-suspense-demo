import React, { Component, Timeout } from "react";
import { createResource } from "simple-cache-provider";

import { LamaList } from "./lamalist";
import { getLamas as getLamasFromService } from "./lamaservice";
import { withCache } from "./withCache";
import { Spinner } from "./spinner";

const getLamas = createResource(getLamasFromService);

const Lamas = withCache(props => {
  const lamas = getLamas.read(props.cache);

  return <LamaList lamas={lamas} />;
});

const Loading = props => {
  return (
    <Timeout ms={props.ms}>
      {didTimeout => {
        return didTimeout ? props.fallback : props.children
      }}
    </Timeout>
  );
};

export class SuspenseExample extends Component {
  render() {
    return (
      <Loading ms={1000} fallback={<Spinner />}>
        <Lamas />
      </Loading>
    );
  }
}
