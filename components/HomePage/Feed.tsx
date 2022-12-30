import React from "react";

type Props = {};

function Feed({}: Props) {
  return (
    <div className="flex flex-row py-10 items-center justify-center">
      <div className="text-5xl uppercase font-semibold mx-auto">
        <div className="text-gray-600 leading-[72px]">
          Why choose us <br /> for{" "}
          <span className="text-orange-400">your healthy meal</span>{" "}
        </div>
      </div>
      <div className="text-2xl mx-auto text-gray-500">
        We continue to consistently choose and maintain <br /> the quality of
        the food served, so that it remains <br /> fresh and nutritious when you
        eat it
      </div>
    </div>
  );
}

export default Feed;
