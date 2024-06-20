
import { render, screen } from '@testing-library/react';
import { Footer } from '@/features/ui';

test('Render the Footer component with te correct date', () => {
  render(<Footer />);

  const date = screen.getByText(`© ${new Date().getFullYear()} Prueba Tecnica para DELOSI`);

  expect(date).toBeInTheDocument();
});
