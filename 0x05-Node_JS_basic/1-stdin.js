process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to ALX, what is your name?\n');

process.stdin.on('data', (input) => {
  if (input) {
    process.stdout.write(`Your name is: ${input}\n`);
    process.stdin.end(); // Close the input stream after receiving the name
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing.\n');
});
