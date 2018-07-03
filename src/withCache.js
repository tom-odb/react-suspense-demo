import React from "react";
import { SimpleCache } from "simple-cache-provider";

export const withCache = Component => {
  return props => (
    <SimpleCache.Consumer>
      {cache => <Component cache={cache} {...props} />}
    </SimpleCache.Consumer>
  );
};

// https://github.com/facebook/react/blob/master/packages/simple-cache-provider/src/SimpleCacheProvider.js
