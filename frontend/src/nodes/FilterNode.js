import { BaseNode } from './BaseNode';

export const FilterNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Filter"
      inputs={[
        { id: 'data' }
      ]}
      outputs={[
        { id: 'filtered' }
      ]}
    >
      <span>Filter Node</span>
    </BaseNode>
  );
};