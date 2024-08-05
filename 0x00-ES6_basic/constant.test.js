import { taskFirst, getLast, taskNext } from './0-constant';

describe('task functions', () => {
  test('taskFirst returns the correct string', () => {
    const result = taskFirst();
    expect(result).toBe('I prefer const when I can.');
  });

  test('getLast returns the correct string', () => {
    const result = getLast();
    expect(result).toBe(' is okay');
  });

  test('taskNext returns the correct concatenated string', () => {
    const result = taskNext();
    expect(result).toBe('But sometimes let is okay');
  });
});
