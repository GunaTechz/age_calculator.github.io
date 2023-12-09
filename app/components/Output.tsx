"use client";

import { useEffect, useState, AnimationEvent } from "react";
import { Inputs } from "./DateEntry";
import { intervalToDuration } from "date-fns";
import { handleClientScriptLoad } from "next/script";

interface OutputProps {
  data: Inputs;
}

const Output: React.FC<OutputProps> = ({ data }) => {
  const [dateDuration, setDateDuration] = useState<Duration>({});
  const [isNewData, setIsNewData] = useState<boolean>(false);

  useEffect(() => {
    if (data.year) {
      const dateNow = new Date();
      const dateThen = new Date(
        Number(data.year),
        Number(data.month) - 1,
        Number(data.day)
      );
      const distance = intervalToDuration({ start: dateThen, end: dateNow });
      setDateDuration(distance);
    }
    if (data.day) {
      setIsNewData(true);
    }
  }, [data]);

  const handleAnimationEvent = (e: AnimationEvent<HTMLDivElement>) => {
    setIsNewData(false);
  };

  const years = dateDuration?.years;
  const months = dateDuration?.months;
  const days = dateDuration?.days;

  const animateClass = isNewData
    ? "animate-grow-text text-purple italic font-extrabold text-2xl md:text-8xl text-center"
    : "text-purple italic font-extrabold text-2xl md:text-8xl text-center";

  return (
    <div className="flex flex-col mb-10">
      <div className="mb-4 grid grid-cols-3 h-11 desktop:h-24">
        <div onAnimationEnd={handleAnimationEvent} className={animateClass}>
          {years ? years : "- - "}
        </div>
        <div className="text-offBlack italic font-extrabold text-2xl desktop:text-6xl col-span-2">
          {" "}
          year<span>{years && years < 2 ? "" : "s"}</span>
        </div>
      </div>
      <div className="mb-4 grid grid-cols-3 h-11 desktop:h-24">
        <div className={animateClass}>{months ? months : "- - "}</div>
        <div className="text-offBlack italic font-extrabold text-2xl desktop:text-6xl col-span-2">
          {"  "} months
        </div>
      </div>
      <div className="grid grid-cols-3 h-11 desktop:h-24">
        <div className={animateClass}>{days ? days : "- - "}</div>
        <div className="text-offBlack italic font-extrabold text-2xl desktop:text-6xl col-span-2">
          {" "}
          days
        </div>
      </div>
    </div>
  );
};

export default Output;
