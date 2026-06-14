// BaseNode.jsx
import { Handle, Position } from "reactflow";

export const BaseNode = ({
    id,
    title,
    inputs = [],
    outputs = [],
    children,
    width = 200,
    height = 80
}) => {
    return (
        <div
            style={{
                width,
                minHeight: height,
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                padding: "12px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
            }}
        >
            {
                inputs.map((input, index) => (
                    
                        <Handle
                            key={input.id}
                            type="target"
                            position={Position.Left}
                            id={`${id}-${input.id}`}
                            style={{
                                top: `${((index + 1) * 100) / (inputs.length + 1)}%`,
                                width: "12px",
                                height: "12px",
                                background: "#2563eb",
                                border: "2px solid white",
                            }}
                        />
                    
                ))
            }
            <div
                style={{
                    marginBottom: "12px",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    color: "#64748b",
                    textTransform: "uppercase",
                }}
            >
                {title}
            </div>

            <div>{children}</div>

            {outputs.map((output, index) => (
                
                    <Handle
                        key={output.id}
                        type="source"
                        position={Position.Right}
                        id={`${id}-${output.id}`}
                        style={{
                            top: `${((index + 1) * 100) / (outputs.length + 1)}%`,
                            width: "12px",
                            height: "12px",
                            background: "#2563eb",
                            border: "2px solid white",
                        }}
                    />
                
            ))
            }
        </div>

    );
}