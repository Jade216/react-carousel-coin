import { render, fireEvent } from '@testing-library/react';
import App from './App';

beforeEach(function() {
  jest
    .spyOn(Math, 'random')
    .mockReturnValueOnce(0.25)
    .mockReturnValueOnce(0.75);
});

afterEach(function() {
  Math.random.mockRestore();
});

test('renders without crashing', () => {
  render(<App />);
});

test('no coin image on initial render', () => {
  const { container } = render(<App />);
  expect(container.querySelector('img')).not.toBeInTheDocument();
});

test('coin image and count updates on flip', () => {
  const { getByText, container } = render(<App />);

  const button = getByText('Flip Coin');
  fireEvent.click(button);
  expect(container.querySelector('img[alt="heads"]')).toBeInTheDocument();
  expect(getByText('Heads: 1 | Tails: 0')).toBeInTheDocument();

  fireEvent.click(button);
  expect(container.querySelector('img[alt="tails"]')).toBeInTheDocument();
  expect(getByText('Heads: 1 | Tails: 1')).toBeInTheDocument();
});
