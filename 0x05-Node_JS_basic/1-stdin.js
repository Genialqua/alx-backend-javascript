const { isatty } = require('tty');

process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (input) => {
  const trimmedInput = input.trim();

  if (isatty(process.stdin.fd)) {
    process.stdout.write(`Your name is: ${trimmedInput}`);
    process.exit(); // Exit after displaying the name
  } else {
    process.stdout.write(`Your name is: ${trimmedInput}`);
    process.stdin.on('end', () => {
      process.stdout.write('This important software is now closing.\n');
    });
  }
});
