const swapPositions = (array, a, b) => {
  [array[a], array[b]] = [array[b], array[a]];
};

export let utilityService = {
  randomRearrange(arr) {
    for (let i = 0; i < arr.length; i++) {
      const a = Math.floor(Math.random() * arr.length);
      const b = Math.floor(Math.random() * arr.length);

      swapPositions(arr, a, b);
    }
    return arr;
  }
};
