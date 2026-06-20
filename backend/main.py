from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from collections import deque

app = FastAPI()

# Allow React frontend to communicate with FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Pipeline(BaseModel):
    nodes: list
    edges: list

def is_dag(nodes, edges):
    graph = {}
    indegree = {}

    for node in nodes:
        node_id = node["id"]
        graph[node_id] = []
        indegree[node_id] = 0

    for edge in edges:
        source = edge["source"]
        target = edge["target"]

        graph[source].append(target)
        indegree[target] += 1

    queue = deque()

    for node in indegree:
        if indegree[node] == 0:
            queue.append(node)

    visited = 0

    while queue:
        current = queue.popleft()
        visited += 1

        for neighbor in graph[current]:
            indegree[neighbor] -= 1

            if indegree[neighbor] == 0:
                queue.append(neighbor)

    return visited == len(nodes)

@app.get("/")
def read_root():
    return {"Ping": "Pong"}


@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):

    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag(pipeline.nodes, pipeline.edges)
         
    }