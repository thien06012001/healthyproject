import React from "react";
import { NormalWeight, UnderWeight, OverWeight, Obese } from "../../../typings";
import NormalWeights from "../Products/NormalWeight";
import UnderWeights from "../Products/UnderWeight";
import OverWeights from "../Products/OverWeight";
import Obeses from "../Products/Obese";
type Props = {
  underweights: UnderWeight[];
};

function ProductFeed_Salad({ underweights }: Props) {
  return (
    <div className="grid grid-cols-3 m-auto relative">
      {underweights.map((underweight) =>
        underweight.categories === "Salad" ? (
          <UnderWeights key={underweight._id} underweight={underweight} />
        ) : (
          <></>
        )
      )}
    </div>
  );
}

export default ProductFeed_Salad;
