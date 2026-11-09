const multiplyValue = (value: number, multiplier?: number) => {
  if (multiplier === undefined) {
    return value * 2;
  }

  return value * multiplier;
};

console.log(multiplyValue(7, 0));
