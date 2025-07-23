"use client";

// ******* NEXT *******
// TODO: move breakdown task to own component / file
// TODO: when AI panel is open, user can click on tasks, highlight them and then apply the AI option to that task

// ******* BACKBURNER *******
// TODO: save to cookie or localstorage option to keep this panel open or closed
// TODO: cleanup and organize classnames

import { useState } from "react";
import AiBreakDownTaskContainer from "./AIBreakDownTaskContainer";
import { ShowPanelButton } from "./ShowPanelButton";
import { useAIBreakDownTask } from "../ai/useAIBreakDownTask";
import { ToDoItem } from "../types";

export const AiPanel = ({
  selectedTodo,
}: {
  selectedTodo: ToDoItem | null;
}) => {
  const [showPanel, setShowPanel] = useState(false);

  const { isLoading, steps } = useAIBreakDownTask();
  console.log("isLoading", isLoading, "steps", steps);


  // TODO: maybe move show/hide to it's own component or logic to hook
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
    <div className="flex-[2] flex flex-col gap-4 text-black bg-gray-600">
      <div className="flex items-start">
        <ShowPanelButton
          isOpen={showPanel}
          onClick={() => setShowPanel(false)}
        />
        <h3 className="h3 ml-auto mr-auto">Apply AI</h3>
      </div>
      <AiBreakDownTaskContainer selectedTodo={selectedTodo} />
    </div>
  );
};
