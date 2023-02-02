const parseTime = (string) => {
  const date = new Date(string);
  return date.getTime();
};

console.log(parseTime("2023-01-30T08:21:58.405Z"));
console.log(parseTime("2023-01-30T08:22:01.309Z"));

// const d = new Date().toISOString();

// console.log(d);
