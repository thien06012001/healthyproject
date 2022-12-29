import React from "react";
import { NormalWeight, UnderWeight, OverWeight, Obese } from "../../../typings";
import NormalWeights from "../Products/NormalWeight";
import UnderWeights from "../Products/UnderWeight";
import OverWeights from "../Products/OverWeight";
import Obeses from "../Products/Obese";
type Props = {
  normalweights: NormalWeight[];
  underweights: UnderWeight[];
  overweights: OverWeight[];
  obeses: Obese[];
};

function ProductFeed({
  normalweights,
  underweights,
  overweights,
  obeses,
}: Props) {
  return (
    <div className="grid grid-cols-3 m-auto relative">
      {normalweights.map((normalweight) => (
        <NormalWeights key={normalweight._id} normalweight={normalweight} />
      ))}
      {underweights.map((underweight) => (
        <UnderWeights key={underweight._id} underweight={underweight} />
      ))}
      {overweights.map((overweight) => (
        <OverWeights key={overweight._id} overweight={overweight} />
      ))}

      {obeses.map((obese) => (
        <Obeses key={obese._id} obese={obese} />
      ))}
    </div>
  );
}

export default ProductFeed;
