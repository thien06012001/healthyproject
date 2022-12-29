import React from "react";
import { NormalWeight, UnderWeight, OverWeight, Obese } from "../../../typings";
import NormalWeights from "../Products/NormalWeight";
import UnderWeights from "../Products/UnderWeight";
import OverWeights from "../Products/OverWeight";
import Obeses from "../Products/Obese";
type Props = {
  normalweights: NormalWeight[];
};

function ProductFeed({ normalweights }: Props) {
  return (
    <div className="grid grid-cols-3 m-auto relative">
      {normalweights.map((normalweight) => (
        <NormalWeights key={normalweight._id} normalweight={normalweight} />
      ))}
    </div>
  );
}

export default ProductFeed;
