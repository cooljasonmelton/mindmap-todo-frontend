"use client";

// ******* NEXT *******
// TODO: move steps display to its own componenet and share with AiCustomQuestion.ts
// TODO: fix disabled button styles

// ******* BACKBURNER *******
// TODO: save to cookie or localstorage option to keep this panel open or closed
// TODO: cleanup and organize classnames
// TODO: maybe move show/hide to it's own component or logic to hook

import { useState } from "react";
import { ShowPanelButton } from "./ShowPanelButton";
import { ToDoItem } from "../types";
import Loader from "./Loader";
import AiFeatureContainer from "./AiFeatureContainer";
import { useAiBreakDownTask } from "../ai/useAiBreakDownTask";
import { useAiBrainstormTask } from "../ai/useAiBrainstormTask";
import AiCustomQuestionForm from "./AiCustomQuestionForm";

export const AiPanel = ({
  selectedTodo,
}: {
  selectedTodo: ToDoItem | undefined;
}) => {
  const [showPanel, setShowPanel] = useState(true);
  const {
    isLoadingBreakdown,
    handleAiBreakdown,
    breakdownSteps,
    resetBreakdown,
  } = useAiBreakDownTask();
  const {
    isLoadingBrainstorm,
    handleAiBrainstorm,
    brainstormSteps,
    resetBrainstorm,
  } = useAiBrainstormTask();

  const handleClickBrainstorm = (task: string) => {
    resetBreakdown();
    resetBrainstorm();
    handleAiBrainstorm(task);
  };
  const handleClickBreakdown = (task: string) => {
    resetBreakdown();
    resetBrainstorm();
    handleAiBreakdown(task);
  };

  const isBreakdownSteps = !!breakdownSteps.length;
  const isBrainstormSteps = !!brainstormSteps.length;

  const isLoading = isLoadingBreakdown || isLoadingBrainstorm;
  const steps =
    (isBreakdownSteps && breakdownSteps) ||
    (isBrainstormSteps && brainstormSteps) ||
    [];

  if (!showPanel) {
    return (
      <div className="card flex-[0] flex flex-col w-full min-h-[90vh]">
        <div className="flex w-full h-[52px]">
          <ShowPanelButton
            isOpen={showPanel}
            onClick={() => setShowPanel(true)}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="card flex-[2] flex flex-col">
      <div className="flex">
        <ShowPanelButton
          isOpen={showPanel}
          onClick={() => setShowPanel(false)}
        />
        <h3 className="h1 ml-auto mr-auto">a.i.</h3>
      </div>
      <div className={!!steps.length ? "card" : "card pb-2"}>
        <AiCustomQuestionForm />
        <AiFeatureContainer
          buttonText="brainstorm task"
          selectedTodo={selectedTodo}
          handleClick={handleClickBrainstorm}
        />
        <AiFeatureContainer
          buttonText="offer step by step"
          selectedTodo={selectedTodo}
          handleClick={handleClickBreakdown}
        />
        {isLoading && (
          <div className="pt-8 pb-6">
            <Loader />
          </div>
        )}
        {!!steps.length && !isLoading && (
          <ul className="p-2">
            {steps?.map((step, i) => (
              <li className="list-item" key={i}>
                {step}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
