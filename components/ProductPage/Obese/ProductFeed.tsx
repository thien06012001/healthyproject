import React from "react";
import { NormalWeight, UnderWeight, OverWeight, Obese } from "../../../typings";
import NormalWeights from "../Products/NormalWeight";
import UnderWeights from "../Products/UnderWeight";
import OverWeights from "../Products/OverWeight";
import Obeses from "../Products/Obese";
type Props = {
  obeses: Obese[];
};

function ProductFeed({ obeses }: Props) {
  return (
    <div className="grid grid-cols-3 m-auto relative">
      {obeses.map((obese) => (
        <Obeses key={obese._id} obese={obese} />
      ))}
    </div>
  );
}

export default ProductFeed;
