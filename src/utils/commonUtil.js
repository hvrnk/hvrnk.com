export function bindClassMethods(...methodNames) {
  methodNames.forEach(methodName => { this[methodName] = this[methodName].bind(this); });
}

export function mergeAndDeduplicateArrays(array1 = [], array2 = []) {
  const array = [ ...array1, ...array2 ];
  return deduplicateArray(array);
}

export function deduplicateArray(array = []) {
  const newArray = [];
  array.map((item, index) => {
    const lengthOfArray = array.length;
    let dupFound = false;
    for (let i = index + 1; i < lengthOfArray; i++) {
      if (array[i] === item) {
        dupFound = true;
      }
    }
    if (!dupFound) {
      newArray.push(item);
    }
  });

  return newArray;
}