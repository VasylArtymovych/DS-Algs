class Node {
  constructor(dest) {
    this.data = dest;
    this.next = null;
  }
}

const V = 5;
const adjList = new Array(5).fill(null);

// const addEdge = (src, dest) => {
//   const newNode = new Node(dest);

//   if (adjList[src] === null) {
//     adjList[src] = newNode;
//   } else {
//     let last = adjList[src];
//     while (last.next !== null) {
//       last = last.next;
//     }
//     last.next = newNode;
//   }
// };

// optimazed adding newNode to directed graph !!!:
const addEdge = (src, dest) => {
  const newNode = new Node(dest);

  newNode.next = adjList[src];
  adjList[src] = newNode;
};

const printGraph = () => {
  for (let i = 0; i < V; i += 1) {
    let temp = adjList[i];
    document.write('adjList[' + i + ']->');
    while (temp !== null) {
      document.write(temp.data + '->');
      temp = temp.next;
    }
    document.write('null<br>');
  }
};

const hasEdge = (src, dest) => {
  let temp = adjList[src];
  while (temp !== null) {
    if (temp.data === dest) {
      return 1;
    } else {
      temp = temp.next;
    }
  }
  return 0;
};

const removeEdge = (src, dest) => {
  if (adjList[src] === null) {
    return;
  } else if (adjList[src].data === dest) {
    adjList[src] = adjList[src].next;
  } else {
    let current = adjList[src];
    while (current.next !== null) {
      if (current.next.data === dest) {
        current.next = current.next.next;
        break;
      } else {
        current = current.next;
      }
    }
  }
};

// addEdge(0, 1);
// addEdge(0, 2);
// addEdge(0, 3);
// addEdge(1, 3);
// addEdge(1, 4);
// addEdge(2, 3);
// addEdge(3, 4);
// console.log(adjList);
// printGraph();
// console.log('is edge in graph', hasEdge(0, 4));
// removeEdge(0, 2);
// removeEdge(1, 4);
// console.log(adjList);
// printGraph();

// add edge to un-directed graph:
const adjList2 = new Array(5).fill(null);

const udgAddEdge = (src, dest) => {
  let newNode = new Node(dest);
  newNode.next = adjList2[src];
  adjList2[src] = newNode;

  newNode = new Node(src);
  newNode.next = adjList2[dest];
  adjList2[dest] = newNode;
};
const prinUdGraph = () => {
  for (let i = 0; i < V; i += 1) {
    document.write('adjList[' + i + ']->');
    let temp = adjList2[i];
    while (temp !== null) {
      document.write(temp.data + '->');
      temp = temp.next;
    }
    document.write('null<br>');
  }
};

udgAddEdge(0, 1);
udgAddEdge(0, 2);
udgAddEdge(0, 3);
udgAddEdge(1, 3);
udgAddEdge(1, 4);
udgAddEdge(2, 3);
udgAddEdge(3, 4);
console.log(adjList2);
prinUdGraph();
