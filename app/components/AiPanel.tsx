"use client";

// TODO: import diff ai features into this panel
// TODO: create a toggle to open and close the AI panel
// TODO: save to cookie or localstorage option to keep this panel open or closed
// TODO: cleanup and organize classnames

import { useState } from "react";
import { ShowPanelButton } from "./ShowPanelButton";

export const AiPanel = () => {
  const [showPanel, setShowPanel] = useState(false);

  // TODO: maybe move show/hide to it's own component?
  if (!showPanel) {
    return (
      <div className="text-black bg-gray-600">
        <ShowPanelButton
          isOpen={showPanel}
          onClick={() => setShowPanel(true)}
        />
      </div>
    );
  }

  return (
    <div className="flex-[2] flex items-start text-black bg-gray-600">
      <ShowPanelButton isOpen={showPanel} onClick={() => setShowPanel(false)} />
      <h3 className="h3 ml-auto mr-auto pr-9">Apply AI</h3>
    </div>
  );
};
