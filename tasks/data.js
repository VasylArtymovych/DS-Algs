const _ = require('lodash');

class Node {
  constructor(val = 0) {
    this.val = val;
    this.next = null;
  }
}

const makeNode = (val, prevNode = null) => {
  const node = new Node(val);

  if (prevNode) {
    prevNode.next = node;
  }

  return node;
};

const n1 = makeNode(1);
const n2 = makeNode(2, n1);
const n3 = makeNode(3, n2);
const n4 = makeNode(4, n3);
const n5 = makeNode(5, n4);

const nodes1 = [n1, n2, n3, n4, n5];
n5.next = n2;

const nodes2 = _.cloneDeep(nodes1);
nodes2[4].next = null;

const nodes3 = _.cloneDeep(nodes1);
nodes3[1].next = n1;

const nodes4 = _.cloneDeep(nodes1);
nodes4[4].next = n4;

const a1 = makeNode(10);

const a2 = _.cloneDeep(a1);
a2.next = a2;

module.exports = {
  Node: Node,
  n1: nodes1[0],
  n2: nodes2[0],
  n3: nodes3[0],
  n4: nodes4[0],
  n5: a1,
  n6: a2,
};
