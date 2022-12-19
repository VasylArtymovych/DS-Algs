// number of vertexes:
const V = 5;

// create Adjacenty matrix:
var adjMatrix = new Array(V);
for (let i = 0; i < adjMatrix.length; i += 1) {
  adjMatrix[i] = new Array(V).fill(0);
}

// add edge in directed graph adjacenty matrix:
const addEdge = (arr, src, dest) => {
  arr[src][dest] = 1;
};

// print edges:
const printAdjMatrix = (arr) => {
  for (let i = 0; i < V; i += 1) {
    for (let j = 0; j < V; j += 1) {
      document.write(arr[i][j] + '');
    }
    document.write('<br/>');
  }
};

// remove edge:
const hasEdge = (arr, src, dest) => {
  if (arr[src][dest] === 1) {
    return 1;
  }
  return 0;
};

//remove egge:
const removeEdge = (arr, src, dest) => {
  arr[src][dest] = 0;
};

addEdge(adjMatrix, 0, 1);
addEdge(adjMatrix, 0, 2);
addEdge(adjMatrix, 0, 3);
addEdge(adjMatrix, 1, 3);
addEdge(adjMatrix, 1, 4);
addEdge(adjMatrix, 2, 3);
addEdge(adjMatrix, 3, 4);

console.log(adjMatrix);

printAdjMatrix(adjMatrix);

console.log(hasEdge(adjMatrix, 1, 2));

//  un-directed graph adjacenty matrix:
var udgAdjMatrix = new Array(V);
for (let i = 0; i < adjMatrix.length; i += 1) {
  udgAdjMatrix[i] = new Array(V).fill(0);
}
const addEdgeUdg = (arr, src, dest) => {
  arr[src][dest] = 1;
  arr[dest][src] = 1;
};

addEdgeUdg(udgAdjMatrix, 0, 1);
addEdgeUdg(udgAdjMatrix, 0, 2);
addEdgeUdg(udgAdjMatrix, 0, 3);
addEdgeUdg(udgAdjMatrix, 1, 3);
addEdgeUdg(udgAdjMatrix, 1, 4);
addEdgeUdg(udgAdjMatrix, 2, 3);
addEdgeUdg(udgAdjMatrix, 3, 4);

console.log(udgAdjMatrix);
