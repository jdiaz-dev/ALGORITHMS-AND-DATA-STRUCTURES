function getNthFibonacci(n, memo = {}) {
  if (n < 0) return
  if (n <= 1) return n;

  if (memo[n] !== undefined) {
    return memo[n];
  }

  memo[n] = getNthFibonacci(n - 1, memo) + getNthFibonacci(n - 2, memo);
  return memo[n];
}

console.log(getNthFibonacci(10)); 
