const multiplyValue = (value: number, multiplier?: number) => {
  if (multiplier === undefined) {
    return value * 2;
  }

  const result = value * multiplier;

  return result === 0 ? 0 : result;
};


type InputValue = string | number | boolean;
const processInput = (value: InputValue): string | number => {
  if (typeof value === "string") {
    return value.trim().toLocaleLowerCase();
  }

  if (typeof value === "number") {
    return value * 10;
  }

  return value ? "Active" : "Inactive";
};