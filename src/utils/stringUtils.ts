export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const indicesOf = (char: string, data: string): number[] => {
  if (char.length !== 1) {
    throw new Error('Char must be a single character.');
  }
  const indices: number[] = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] === char) indices.push(i);
  }
  return indices;
};

/**
 * Find the number characters that two strings have in common.
 * Not case sensitive.
 */
export const numberOfMatchingChars = (a: string, b: string) => {
  const aLower = a.toLowerCase();
  const bLower = b.toLowerCase();
  const matchingIndices = new Set();
  // Go through all chars in A to find matching chars in B
  for (let i = 0; i < a.length; i++) {
    const char = aLower[i];
    // Find a matching char in B that is not already matched
    for (const index of indicesOf(char, bLower)) {
      if (!matchingIndices.has(index)) {
        matchingIndices.add(index);
        break;
      }
    }
  }
  return matchingIndices.size;
};

/**
 * Returns true if all characters in the search parameter are found in the data parameter in the same order.
 */
export const containsAllCharsInOrder = (search: string, data: string): boolean => {
  const searchLower = search.toLowerCase();
  const dataLower = data.toLowerCase();
  let searchIndex = 0;
  for (let i = 0; i < dataLower.length; i++) {
    if (dataLower[i] === searchLower[searchIndex]) {
      searchIndex++;
      if (searchIndex === searchLower.length) return true;
    }
  }
  return false;
};

/**
 * Returns a number between 0 and 1 representing the ratio of matching characters in the search string and the data string.
 * @param search The string to search for.
 * @param data The string to search in.
 * @returns A number between 0 and 1 representing the ratio of matching characters in the search string and the data string.
 */
export const matchRatio = (search: string, data: string): number => {
  if (!search || !data) return 0;
  const searchLower = search.toLowerCase();
  const dataLower = data.toLowerCase();
  const [shortest, longest] = searchLower.length < dataLower.length
    ? [searchLower, dataLower]
    : [dataLower, searchLower];
  const matchedIndices: number[] = [];
  for (let i = 0; i < shortest.length; i++) {
    const char = shortest[i];
    // Find a matching char in B that is not already matched
    for (const index of indicesOf(char, longest)) {
      if (!matchedIndices.includes(index)) {
        matchedIndices.push(index);
        break;
      }
    }
  }
  return matchedIndices.length / longest.length;
}
