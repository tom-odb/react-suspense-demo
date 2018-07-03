import React, { Component, Timeout } from "react";
import { createResource } from "simple-cache-provider";

import { LamaList } from "./lamalist";
import { getLamas as getLamasFromService } from "./lamaservice";
import { withCache } from "./withCache";
import { Spinner } from "./spinner";

const getLamas = createResource(
  () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve([]);
      }, 2000);
    })
);

const Lamas = withCache(props => {
  const lamas = getLamas.read(props.cache);

  return <LamaList lamas={lamas} />;
});

export class SuspenseExample extends Component {
  render() {
    return (
      <Timeout ms={1000}>
        {didTimeout => {
          if (didTimeout) {
            return <Spinner />;
          }

          return <Lamas />;
        }}
      </Timeout>
    );
  }
}
