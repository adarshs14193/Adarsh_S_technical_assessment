// llmNode.js

import { BaseNode } from "./BaseNode";

export const LLMNode = ({ id }) => {

  return (
    <BaseNode
      id={id}
      title="LLM"
      inputs={[
        {
          id: 'system'
        },
        {
          id: 'prompt'

        },]}
      outputs={[
        {
          id: 'response'
        }
      ]}
    >
      <span>LLM Node</span>
    </BaseNode>
  );
}
