import React from "react";
import { SimpleCache } from "simple-cache-provider";

export const withCache = Component => {
  return props => (
    <SimpleCache.Consumer>
      {cache => <Component cache={cache} {...props} />}
    </SimpleCache.Consumer>
  );
};
