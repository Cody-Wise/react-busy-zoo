import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('clicking frong button adds a frog to dom', () => {
  render(<App />);

  const frogEmojisBefore = screen.queryAllByText(/🐸/i);
  expect(frogEmojisBefore.length).toBe(1);

  const addFrogButton = screen.getByText(/Add Frog/i);
  fireEvent.click(addFrogButton);

  const frogEmojisAfter = screen.queryAllByText(/🐸/i);
  expect(frogEmojisAfter.length).toBe(2);
});

test('clicking open zoo button changes text', () => {
  render(<App />);

  const closedTextBefore = screen.queryByText(/We are closed please go away!/i);
  expect(closedTextBefore).toBeInTheDocument();
  // const text = node.textContent;).toBe(1);

  const openZooButton = screen.getByText(/Open Zoo/i);
  fireEvent.click(openZooButton);

  const openTextAfter = screen.queryByText(/Welcome to the Zoo!/i);
  expect(openTextAfter).toBeInTheDocument();
});
