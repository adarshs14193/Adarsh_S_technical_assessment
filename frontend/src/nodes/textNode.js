// textNode.js

import { useState, useEffect } from 'react';
import { BaseNode } from './BaseNode';
import { useUpdateNodeInternals } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);

  const updateNodeInternals = useUpdateNodeInternals();
  useEffect(() => {
    updateNodeInternals(id);
  }, [variables, id, updateNodeInternals]);

  const width = Math.max(200, currText.length * 8);

  const lines = Math.max(
    currText.split('\n').length,
    Math.ceil(currText.length / 35)
  );

  const height = Math.max(
    120,
    lines * 25.6
  );

  const textAreaheight = Math.max(
    60, lines * 20.6
  );

  const extractvariables = (text) => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

    const matches = [...text.matchAll(regex)];

    return matches.map(match => match[1]);

  }

  const handleTextChange = (e) => {
    const text = e.target.value;

    setCurrText(text);

    const vars = extractvariables(text);

    setVariables([...new Set(vars)]);

  };

  return (
    <BaseNode
      id={id}
      title="Text"
      width={250}
      height={height}
      inputs={
        variables.map((variable) => ({ id: variable }))
      }
      outputs={[
        { id: 'output' }
      ]}
    >
      <label>
        Text:
        <textarea
          value={currText}
          onChange={handleTextChange}
          style={{
            width: "100%",
            height: `${textAreaheight}px`,
            resize: "none",
            overflow: "hidden",
            boxSizing: "border-box",
            border: "1px solid #cbd5e1",
            borderRadius: "6px",
            padding: "8px",
            fontSize: "14px",
          }}
        />
      </label>
    </BaseNode>


  );
}
