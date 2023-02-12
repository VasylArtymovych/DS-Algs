//todo: Visit all nodes in graph, using method BFS:
var V = 5; // vertexes
const graph = [
  [0, 1, 1, 1, 0], // 0 - - - -  1  -
  [1, 0, 0, 1, 1], // -  -       -     --
  [1, 0, 0, 1, 0], // -    -     -        -  4
  [1, 1, 1, 0, 1], // -      -   -     --
  [0, 1, 0, 1, 0], // 2 - - - -  3  -
];

const g = {};
g[0] = ['1', '2', '3'];
g[1] = ['0', '3', '4'];
g[2] = ['0', '3'];
g[3] = ['0', '1', '2', '3', '4'];
g[4] = ['1', '3'];

// Using Array and Queue data structures:
// Time: O(Nˆ2); Space: O(1)
const bfs = (graph, source) => {
  const queue = [];
  const isVisited = new Array(V).fill(false);

  queue.push(source);
  isVisited[source] = true;

  while (queue.length > 0) {
    const node = queue.shift();
    console.log('Visited node: ' + node);

    for (let i = 0; i < V; i++) {
      if (graph[node][i] === 1 && isVisited[i] === false) {
        queue.push(i);
        isVisited[i] = true;
      }
    }
  }
};
//result:
const start = process.hrtime.bigint();
bfs(graph, 0); // Visited node: 0 ,1,2,3,4  Time: 4ms
const end = process.hrtime.bigint();
const ms = Number(end - start) / 1e6;
console.log('ms1', ms);

//todo: Option 2:
// Using Object, Array and Queue data structures:
// Time: O(Nˆ2); Space: O(1)
const bfs2 = (graph, source) => {
  const queue = [];
  const isVisited = [];

  queue.push(source);
  isVisited.push(source);

  while (queue.length !== 0) {
    const node = queue.shift();
    console.log('Visited node: ' + node);

    for (let i = 0; i < graph[node].length; i++) {
      if (!isVisited.includes(graph[node][i])) {
        queue.push(graph[node][i]);
        isVisited.push(graph[node][i]);
      }
    }
  }
};
//result:
const start2 = process.hrtime.bigint();
bfs2(g, '0'); // Visited node: 0 ,1,2,3,4  Time: 0.4ms
const end2 = process.hrtime.bigint();
const ms2 = Number(end2 - start2) / 1e6;
console.log('ms2', ms2);
