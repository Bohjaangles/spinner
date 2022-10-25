
let count = 1;
const first = '\r|   ';
const second = '\r/   ';
const third = '\r-   ';
const fourth = '\r\\   ';

const loader = (write, num) => {
  setTimeout(() => { process.stdout.write(write) }, 100 * num);
  count += 2
}


loader(first, count);
loader(second, count);
loader(third, count);
loader(fourth, count);