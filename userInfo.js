function processArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i] * arr[i]);
    } else {
      result.push(arr[i] * 3);
    }
  }
  return result;
}

function formatArrayStrings(strArr, numArr) {
  let result = [];
  for (let i = 0; i < strArr.length; i++) {
    if (numArr[i] % 2 === 0) {
      result.push(strArr[i].toUpperCase());
    } else {
      result.push(strArr[i].toLowerCase());
    }
  }
  return result;
}

function createUserProfiles(names, modifiedNames) {
  let result = [];
  let id = 1;
  for (let i = 0; i < names.length; i++) {
    result.push({
      originalName: names[i],
      modifiedName: modifiedNames[i],
      id: id
    });
    id++;
  }
  return result;
}
