"use client";

// TODO: import diff ai features into this panel
// TODO: create a toggle to open and close the AI panel
// TODO: save to cookie or localstorage option to keep this panel open or closed
// TODO: cleanup and organize classnames

import { useState } from "react";
import { OpenButton } from "./OpenButton";
import { CloseButton } from "./CloseButton";

export const AiPanel = () => {
  const [showPanel, setShowPanel] = useState(true);
  console.log("showpanel", showPanel);

  // TODO: maybe move this to it's own component?
  if (!showPanel) {
    return (
      <div className="text-black bg-gray-600">
        <OpenButton onClick={() => setShowPanel(true)} />
      </div>
    );
  }

  return (
    <div className="flex-[1] flex items-start justify-start text-black bg-gray-600">
      <CloseButton onClick={() => setShowPanel(false)} />
    </div>
  );
};
