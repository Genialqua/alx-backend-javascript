const { isatty } = require('tty');

process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to ALX, what is your name?\n');

process.stdin.on('data', (input) => {
  // Trim input to remove extra spaces or newlines
  const trimmedInput = input.trim();

  if (isatty(process.stdin.fd)) {
    process.stdout.write(`Your name is: ${trimmedInput}\n`);
    process.exit(); // Exit after displaying the name
  } else {
    process.stdout.write(`Your name is: ${trimmedInput}\n`);
    process.stdin.on('end', () => {
      process.stdout.write('This important software is now closing.\n');
    });
  }
});
