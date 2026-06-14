// submit.js

import { useStore } from './store';

export const SubmitButton = () => {
    const nodes = useStore((state) => state.nodes);
    const edges = useStore((state) => state.edges);

    const handleSubmit = async () => {
        try {
            const response = await fetch(
                "http://127.0.0.1:8000/pipelines/parse",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        nodes,
                        edges,
                    }),
                }
            );

            const data = await response.json();

            alert(
                `Pipeline Analysis

                Nodes: ${data.num_nodes}
                Edges: ${data.num_edges}
                Is DAG: ${data.is_dag}`
            );
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '20px',
            }}
        >
            <button
                onClick={handleSubmit}
                style={{
                    background: '#2563eb',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 18px',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '14px',
                }}
            >
                Submit
            </button>
        </div>
    );
};