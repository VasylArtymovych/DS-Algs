/**Given the head of a singly linked list, reverse the list, and return the reversed list.
 * 
Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000 */

const reverListItr = (head) => {
  if (!head) return null;

  let prev = null;
  let node = head;
  let reversed;

  while (node) {
    let next = node.next;

    if (!next) {
      reversed = node; // make last node first one;
    }

    node.next = prev;
    prev = node;
    node = next;
  }

  return reversed;
};

console.log(
  'Itr',
  reverListItr({ data: 1, next: { data: 2, next: { data: 3, next: null } } })
); // { data: 3, next: { data: 2, next: { data: 1, next: null } } }

//todo: reverse list using recursion:
const reverseList = (head) => {
  if (!head) return null;

  return reverListRec(head, null);
};

const reverListRec = (node, nextNode) => {
  if (!node) {
    return nextNode;
  }
  let next = node.next;
  node.next = nextNode;
  return reverListRec(next, node);
};

console.log(
  'Rec',
  reverListItr({ data: 1, next: { data: 2, next: { data: 3, next: null } } })
); // { data: 3, next: { data: 2, next: { data: 1, next: null } } });
