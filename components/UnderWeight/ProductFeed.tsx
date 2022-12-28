import React from "react";
import { NormalWeight, UnderWeight, OverWeight, Obese } from "../../typings";
import NormalWeights from "../NormalWeight";
import UnderWeights from "../UnderWeight";
import OverWeights from "../OverWeight";
import Obeses from "../Obese";
type Props = {
  underweights: UnderWeight[];
};

function ProductFeed({ underweights }: Props) {
  return (
    <div className="grid grid-cols-3 m-auto relative">
      {underweights.map((underweight) => (
        <UnderWeights key={underweight._id} underweight={underweight} />
      ))}
    </div>
  );
}

export default ProductFeed;