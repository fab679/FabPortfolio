import React, { useState } from "react";
import Panel from "./Panel";
import PanelList from "./PanelList";

function Resume(props) {
  const [panelIndex, setPanleIndex] = useState({ panel: 0, active: 0 });

  const getBtnId = (e) => {
    if (e.target && e.target?.nodeName === "BUTTON") {
      setPanleIndex({
        panel: Number(e.target?.id),
        active: Number(e.target?.id),
      });
    }
  };
  return (
    <div
      className="h-full flex flex-col p-6 justify-center items-center bg-zinc-50 space-y-3"
      id="resume"
    >
      <div className="text-3xl font-bold text-slate-700 px-5 py-2 bg-white">
        Resume
      </div>
      <div className="flex flex-col md:flex-row shadow-lg bg-white">
        <div className="flex flex-col items-center md:flex-row md:items-start">
          <div>
            <Panel getBtnId={getBtnId} active={panelIndex.active} />
          </div>
          <div className="w-full min-h-[32rem] md:min-h-0 md:min-w-[40rem]">
            <PanelList panelIndex={panelIndex} />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Resume;
