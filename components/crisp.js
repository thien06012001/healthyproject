
import React, { Component } from "react";

import { Crisp } from "crisp-sdk-web";

class CrispChat extends Component {
  componentDidMount () {
    Crisp.configure("901eb8f1-a3af-41ec-847e-0ba2639a9943");
  }

  render () {
    return null;
  }
}
export default CrispChat