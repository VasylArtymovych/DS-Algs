// Depth first search algorithm, using stack:
// Time:O(V + E), Space: O(V)
const dfs = (graph, from, visited = []) => {
  visited[from] = true;
  console.log(`DFS Visiting; #${from}`);

  for (let i = 0; i < graph[from].length; i++) {
    if (graph[from][i] === 1 && !visited[i]) {
      dfs(graph, i, visited);
    }
  }
};

// Breath first search algorithm, using queue:
// Time:O(V + E), Space: O(V)
const bfs = (graph, from) => {
  const queue = [];
  const visited = [];

  queue.push(from);
  visited[from] = true;

  while (queue.length > 0) {
    const v = queue.shift();
    console.log(`BFS Visiting: #${v}`);

    for (let i = 0; i < graph[v].length; i++) {
      if (graph[v][i] === 1 && !visited[i]) {
        visited[i] = true;
        queue.push(i);
      }
    }
  }
};

const g = [
  [0, 1, 0, 0, 1, 0],
  [1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0],
];

dfs(g, 3);
console.log('------------');
bfs(g, 3);
