/**
 * There is a car with capacity empty seats. The vehicle only drives east 
  (i.e., it cannot turn around and drive west).

 * You are given the integer capacity and an array trips where 
  trips[i] = [numPassengersi, fromi, toi] indicates that the ith trip has 
  numPassengersi passengers and the locations to pick them up and drop them off 
  are fromi and toi respectively. The locations are given as the number of kilometers 
  due east from the car's initial location.

 * Return true if it is possible to pick up and drop off all passengers 
  for all the given trips, or false otherwise.

Example 1:
Input: trips = [[2,1,5],[3,3,7]], capacity = 4
Output: false

Example 2:
Input: trips = [[2,1,5],[3,3,7]], capacity = 5
Output: true

Constraints:
1 <= trips.length <= 1000
trips[i].length == 3
1 <= numPassengersi <= 100
0 <= fromi < toi <= 1000
1 <= capacity <= 105
 */

// Time: O(n^2); Space: O(1)
const carPooling = (capacity, trips) => {
  let endPoint = 0;
  for (const trip of trips) {
    if (trip[2] > endPoint) {
      endPoint = trip[2];
    }
  }

  const distance = new Array(endPoint + 1).fill(0);

  for (const [pass, start, end] of trips) {
    for (let i = start; i < end; i++) {
      distance[i] += pass;
    }
  }

  for (const passengers of distance) {
    if (passengers > capacity) return false;
  }
  return true;
};

// Time O(n); Space: O(max(n, 1000))
const carPooling2 = (capacity, trips) => {
  let endPoint = 0;
  for (const trip of trips) {
    if (trip[2] > endPoint) {
      endPoint = trip[2];
    }
  }
  // Because from and to is between 0 and 1000. Idea is to store counts in an array of size 1001.
  // let lengthOfTrip = Array(1001).fill(0);
  // Optimiszed option to reduce the memory complexity:
  const lengthOfTrip = new Array(endPoint + 1).fill(0);
  // Update passenger change for each trip
  for (const [trip, i, j] of trips) {
    lengthOfTrip[i] += trip; // Increment when passenger is on board
    lengthOfTrip[j] -= trip; // decrement when they depart
  }

  let carLoad = 0;
  // Count total passenger for each bus top
  // we have the count array, we perform a line sweep from 0 to 1000 and track its total
  for (let i = 0; i < lengthOfTrip.length; i++) {
    carLoad += lengthOfTrip[i];
    if (carLoad > capacity) {
      // Reject when the car is overloaded somewhere
      return false;
    }
  }
  return true; // Accept only if all trip is safe
};

// this solution is more general, will work with bigger inputs
// but it requires new array of size 2*N (each trip is added there as 2 objects)
// and due to universal sort the time complexity is not linear

// Time : O(n log n), Space: O(n)
const carPooling3 = (capacity, trips) => {
  const points = [];
  for (let trip of trips) {
    // pickup part, add passengers
    points.push([trip[1], trip[0]]);

    // dropoff part, remove passengers
    points.push([trip[2], -trip[0]]);
  }

  // sort by location (point)
  points.sort((o1, o2) => o1[0] - o2[0]);

  let load = 0;
  for (let point of points) {
    // pickup point will have positive int
    // dropoff point will have negative int
    load += point[1];

    // if at any point current load (number of passengers) will be
    // more than capacity -- it is false
    if (load > capacity) {
      return false;
    }
  }

  return true;
};

// Check results:
console.log(
  carPooling(4, [
    [2, 1, 5],
    [3, 3, 7],
  ])
); // false
console.log(
  carPooling(5, [
    [2, 1, 5],
    [3, 3, 7],
  ])
); // true
console.log(
  carPooling(5, [
    [3, 3, 7],
    [2, 1, 8],
    [5, 8, 20],
  ])
); // true
console.log(
  carPooling(2, [
    [2, 1, 2],
    [2, 5, 20],
    [2, 3, 4],
  ])
); // true
console.log(
  carPooling(1, [
    [2, 1, 2],
    [2, 3, 4],
    [2, 5, 20],
  ])
); // false
console.log(
  carPooling(3, [
    [1, 10, 15],
    [2, 3, 4],
    [2, 5, 20],
    [2, 1, 2],
    [1, 17, 19],
  ])
); // true
console.log(
  carPooling(5, [
    [2, 1, 5],
    [3, 3, 7],
    [5, 3, 9],
  ])
); // false
