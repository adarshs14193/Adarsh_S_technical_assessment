// inputNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Input"
      outputs={[
        {
          id: 'value'
        }
      ]}
    >

      <label>
        Name:
        <input
          type="text"
          value={currName}
          onChange={handleNameChange}
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #cbd5e1",
            borderRadius: "6px",
            marginTop: "4px",
            marginBottom: "8px",
            boxSizing: "border-box",
          }}
        />
      </label>
      <label>
        Type:
        <select value={inputType} onChange={handleTypeChange} style={{
          width: "100%",
          padding: "8px",
          border: "1px solid #cbd5e1",
          borderRadius: "6px",
          marginTop: "4px",
          boxSizing: "border-box",
        }}>
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </BaseNode>
  );
}
