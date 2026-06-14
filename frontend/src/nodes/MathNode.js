import { BaseNode } from './BaseNode';

export const MathNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Math"
      inputs={[
        { id: 'a' },
        { id: 'b' }
      ]}
      outputs={[
        { id: 'result' }
      ]}
    >
      <span>Math Node</span>
    </BaseNode>
  );
};