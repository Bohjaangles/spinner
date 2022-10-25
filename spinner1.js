console.log('so, I have a question, here, I\'ll upload it, hang on one sec....should be loading now');

const load = () => {
  setTimeout(() => { process.stdout.write('\r|   ') }, 100);
  setTimeout(() => { process.stdout.write('\r/   ') }, 300);
  setTimeout(() => { process.stdout.write('\r-   ') }, 500);
  setTimeout(() => { process.stdout.write('\r\\   ') }, 700);
};

const loading = () => setInterval(load, 800);

load();