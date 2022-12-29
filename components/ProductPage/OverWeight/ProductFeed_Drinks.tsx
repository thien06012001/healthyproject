import React from "react";
import { NormalWeight, UnderWeight, OverWeight, Obese } from "../../../typings";
import NormalWeights from "../Products/NormalWeight";
import UnderWeights from "../Products/UnderWeight";
import OverWeights from "../Products/OverWeight";
import Obeses from "../Products/Obese";
type Props = {
  overweights: OverWeight[];
};

function ProductFeed_Drinks({ overweights }: Props) {
  return (
    <div className="grid grid-cols-3 m-auto relative">
      {overweights.map((overweight) =>
        overweight.categories === "Drinks" ? (
          <OverWeights key={overweight._id} overweight={overweight} />
        ) : (
          <></>
        )
      )}
    </div>
  );
}

export default ProductFeed_Drinks;
