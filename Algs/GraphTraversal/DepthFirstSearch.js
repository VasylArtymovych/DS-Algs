//
//todo: Visit all nodes in graph, using method DFS:

const V = 5; // vertexes of graph;
const graph = [
  [0, 1, 1, 1, 0], // 0 - - - -  1  -
  [1, 0, 0, 1, 1], // -  -       -     --
  [1, 0, 0, 1, 0], // -    -     -        -  4
  [1, 1, 1, 0, 1], // -      -   -     --
  [0, 1, 0, 1, 0], // 2 - - - -  3  -
];

const dfs = (graph, start) => {
  const stack = [];
  const visited = new Array(V).fill(false);

  stack.push(start);
  visited[start] = true;

  while (stack.length > 0) {
    let node = stack.pop();
    console.log('Visited node: ' + node);

    for (let i = 0; i < V; i++) {
      if (graph[node][i] === 1 && visited[i] === false) {
        stack.push(i);
        visited[i] = true;
      }
    }
  }
};

dfs(graph, 0); // Visited node: 0,3,4,2,1
