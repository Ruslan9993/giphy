export const debounce = (func, ms) => {

  let timer;
  return function() {
    const fn = () => {func.apply(this, arguments);}

    clearTimeout(timer)
    timer = setTimeout(fn, ms)
  }
}