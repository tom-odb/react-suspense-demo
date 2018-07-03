import React from "react";
import { SimpleCache } from "simple-cache-provider";

export const withCache = Component => props => (
  <SimpleCache.Consumer>
    {cache => <Component cache={cache} {...props} />}
  </SimpleCache.Consumer>
);
