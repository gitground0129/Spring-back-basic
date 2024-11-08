import { render, screen } from '@testing-library/react';
import App from './App';
// 음 렌더링 테스트 하는 그런 파일인가용?
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
