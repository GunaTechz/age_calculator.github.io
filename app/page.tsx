"use client";

import Output from "./components/Output";
import DateEntry from "./components/DateEntry";
import { useCallback, useState } from "react";
import { Inputs } from "./components/DateEntry";

export default function Home() {
  const [dateData, setDateData] = useState<Inputs>({
    day: "",
    month: "",
    year: "",
  });

  const handleDates = (data: Inputs) => {
    setDateData(data);
  };

  return (
    <div className="absolute w-[92%] mx-4 mt-20 desktop:mx-[20%] desktop:w-[750px] desktop:h-[80hv] bg-white desktop:p-8 rounded-3xl rounded-br-[128px]">
      <div className="flex flex-col p-6">
        <DateEntry handleDates={handleDates} />
        <Output data={dateData} />
      </div>
    </div>
  );
}
