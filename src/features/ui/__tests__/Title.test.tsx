
import { render, screen } from '@testing-library/react';
import { Title } from '@/features/ui';

test('Render the Title component with te correct title and subtitle', () => {
  render(<Title title='Title' subtitle='Subtitle' />);

  const title = screen.getByText('Title');
  const subtitle = screen.getByText('Subtitle');

  expect(title).toBeInTheDocument();
  expect(subtitle).toBeInTheDocument();
});

test('Render the Title component with the correct title and no subtitle', () => {
  render(<Title title='Title' />);

  const title = screen.getByText('Title');
  const subtitle = screen.queryByRole('h2');

  expect(title).toBeInTheDocument();
  expect(subtitle).not.toBeInTheDocument(); 
});