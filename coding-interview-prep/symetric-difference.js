/**
 * The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of
 * the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.
 * Symmetric difference is a binary operation, which means it operates on only two elements.
 * So to evaluate an expression involving symmetric differences among three elements (A △ B △ C),
 * you must complete one operation at a time. Thus, for sets A and B above,
 * and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.
 *
 * Create a function that takes two or more arrays and returns an array of their symmetric difference.
 * The returned array must contain only unique values (no duplicates).
 */

function sym(...args) {
  // get the remaining args after taken the first two
  const restArrays = args.slice(2);

  const foundIn1 = [];
  const foundIn2 = [];
  for (let i = 0; i < args[0].length; i += 1) {
    if (args[1].indexOf(args[0][i]) < 0) {
      foundIn2.push(args[0][i]);
    }
  }
  for (let i = 0; i < args[1].length; i += 1) {
    if (args[0].indexOf(args[1][i]) < 0) {
      foundIn1.push(args[1][i]);
    }
  }

  const difference = foundIn1.concat(foundIn2).sort((a, b) => a - b);
  let uniqDiff = difference.filter((el, i) => difference.indexOf(el) === i);

  // If params remain to be executed
  if (restArrays.length > 0) {
    // recursively execute this function (restArrays.length) times
    for (let i = 0; i < restArrays.length; i += 1) {
      uniqDiff = sym(uniqDiff, restArrays[i]);
    }
  }

  return uniqDiff;
}

const result = sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
console.log('result: ', result);

// sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].
// sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements.
// sym([1, 2, 3, 3], [5, 2, 1, 4]) should return [3, 4, 5].
// sym([1, 2, 3, 3], [5, 2, 1, 4]) should contain only three elements.
// sym([1, 2, 3], [5, 2, 1, 4, 5]) should return [3, 4, 5].
// sym([1, 2, 3], [5, 2, 1, 4, 5]) should contain only three elements.
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5].
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements.
// sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].
// sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements.
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7].
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements.
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9].
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements.
