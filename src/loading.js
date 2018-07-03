import React, { Component } from "react";

import { LamaList } from "./lamalist";
import { getLamas } from "./lamaservice";
import { Spinner } from "./spinner";

export class LoadingExample extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      lamas: null
    };
  }

  componentDidMount() {
    getLamas().then(lamas =>
      this.setState({
        lamas
      })
    );
  }

  render() {
    const lamas = this.state.lamas;
    const template = lamas ? <LamaList lamas={lamas} /> : <Spinner />;

    return (
      <div>
        <h2>Lamas with loading</h2>
        {template}
      </div>
    );
  }
}
