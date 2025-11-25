function processCategories(arr) {
  const counts = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  const sortedCategories = Object.entries(counts)
    .sort((a, b) => b[1] - a[1]) 
    .map(item => item[0]); 
  return {
    counts: counts,
    sorted: sortedCategories
  };
}
const input = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
const result = processCategories(input);
console.log(result.counts); 
console.log(result.sorted);  
