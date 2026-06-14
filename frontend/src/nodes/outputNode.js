// outputNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Output"
      inputs={[
        { id: "value" }
      ]}
    >
      <label>
        Name:
        <input
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #cbd5e1",
            borderRadius: "6px",
            marginTop: "4px",
            marginBottom: "8px",
            boxSizing: "border-box",
          }}
          type="text"
          value={currName}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Type:
        <select value={outputType} onChange={handleTypeChange} style={{
          width: "100%",
          padding: "8px",
          border: "1px solid #cbd5e1",
          borderRadius: "6px",
          marginTop: "4px",
          boxSizing: "border-box",
        }}>
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </BaseNode>
  );
}
