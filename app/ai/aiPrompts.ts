export const getTaskBrainstormPrompt = (
  task: string
) => `Think through task and formulate specific, clarifying questions and seperate each question with ' | ' and no other text, no other separators or numbered steps:

Task: ${task}

Format: "output | output | output | ..."`;

export const getTaskBreakdownPrompt = (
  task: string
) => `Think through task and break it down into specific, actionable steps and separate each step with ' | ' and no other text, no other separators or numbered steps:

Task: ${task}

Format: "output | output | output | ..."`;
