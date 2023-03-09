const INF = 999999;

const main = () => {
  const graph = [
    [0, 3, INF, 5, INF],
    [2, 0, INF, 4, INF],
    [INF, 1, 0, INF, INF],
    [INF, INF, 2, 0, INF],
    [INF, 10, INF, INF, 0],
  ];

  console.log('Running Floyd-Warshall:');
  printMatrix(floydWarshall(graph));
  console.log();

  console.log('Running Dijkstra from each vertex:');
  for (let i = 0; i < graph.length; i++) {
    printArray(dijkstra(graph, i));
  }
};

// Implementation of Floyd-Warshall algorithm
const floydWarshall = (graph) => {
  const n = graph.length;
  const matrix = [];

  for (let i = 0; i < n; i++) {
    matrix[i] = [...graph[i]];
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (matrix[i][k] + matrix[k][j] < matrix[i][j])
          matrix[i][j] = matrix[i][k] + matrix[k][j];
      }
    }
  }
  return matrix;
};

const getClosestVertex = (distance, visited) => {
  let min = INF;
  let minIdx = -1;
  for (let i = 0; i < distance.length; i++) {
    if (distance[i] < min && !visited[i]) {
      min = distance[i];
      minIdx = i;
    }
  }
  return minIdx;
};

// Implementation of Dijkstra algorithm
const dijkstra = (g, src) => {
  const n = g.length;

  const distance = [];
  const visited = [];

  //initializing the arrays
  for (let i = 0; i < n; i++) {
    distance[i] = INF; //initial distance is infinite
    visited[i] = false; //shortest distance for any node has not been found yet
  }
  distance[src] = 0;

  for (let i = 0; i < n; i++) {
    const closestVertex = getClosestVertex(distance, visited);
    //if closest node is -1 (infinite distance away), it means that no other node can be reached
    if (closestVertex === -1) {
      return distance;
    }

    visited[closestVertex] = true;
    for (let j = 0; j < n; j++) {
      if (!visited[j] && g[closestVertex][j] !== 0) {
        //distance via closestVertex might be less than the initial distance
        distance[j] = Math.min(
          distance[j],
          distance[closestVertex] + g[closestVertex][j]
        );
      }
    }
  }
  return distance;
};

const printMatrix = (matrix) => {
  matrix.forEach(printArray);
};

const printArray = (arr) => {
  let s = '';
  for (const j of arr) {
    s += j === INF ? 'INF ' : j + ' ';
  }
  console.log(s);
};

main();
