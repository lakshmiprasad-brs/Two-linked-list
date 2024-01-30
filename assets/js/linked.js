class ListNode {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

function getIntersectionNode(headA, headB) {
  if (!headA || !headB) return null;

  let lenA = getLength(headA);
  let lenB = getLength(headB);

  let currA = headA;
  let currB = headB;

  // Move pointer of longer list by the difference in lengths
  if (lenA > lenB) {
    for (let i = 0; i < lenA - lenB; i++) {
      currA = currA.next;
    }
  } else {
    for (let i = 0; i < lenB - lenA; i++) {
      currB = currB.next;
    }
  }

  // Traverse both lists in parallel until intersection or end is reached
  while (currA && currB) {
    if (currA === currB) {
      return currA;
    }
    currA = currA.next;
    currB = currB.next;
  }

  return null; // No intersection found
}

function getLength(head) {
  let length = 0;
  let current = head;
  while (current) {
    length++;
    current = current.next;
  }
  return length;
}

// Example usage:
// Construct linked lists
let list1 = new ListNode(4);
list1.next = new ListNode(1);
list1.next.next = new ListNode(8);
list1.next.next.next = new ListNode(4);
list1.next.next.next.next = new ListNode(5);
list1.next.next.next.next.next = new ListNode(6);

let list2 = new ListNode(5);
list2.next = new ListNode(6);
list2.next.next = list1.next.next; // Intersection point

// Find intersection
let intersectionNode = getIntersectionNode(list1, list2);
console.log(intersectionNode ? intersectionNode.val : "No intersection");
