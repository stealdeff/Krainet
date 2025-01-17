// Напcать функцию, которая при заданном числе n (n >= 1) возвращает n-е число в последовательности Фибоначчи.
// Например:
//  nthFibo(4) вернёт 2
function nthFibo(n)
{
  if (n === 1) return 0; 
  if (n === 2) return 1;
  return nthFibo(n - 1) + nthFibo(n - 2);
}
console.log(nthFibo(4))