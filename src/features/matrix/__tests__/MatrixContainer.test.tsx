import { fireEvent, render, screen } from '@testing-library/react';
import { MatrixContainer } from '../components/matrix-container/MatrixContainer';
import { rotateMatrix } from '../utils/rotateMatrix';

jest.mock('../utils/rotateMatrix', () => ({
  rotateMatrix: jest.fn(),
}));

describe('Testing MatrixContainer Component', () => {

  beforeEach(() => {
    (rotateMatrix as jest.Mock).mockImplementation((matrix) => matrix);
  });

  test('Render the MatrixContainer component and test that it renders the MatrixButtons, MatrixInput, and MatrixOutput components.', () => {
    render(<MatrixContainer />);

    expect(screen.getByText('Remover')).toBeInTheDocument();
    expect(screen.getByText('Incrementar')).toBeInTheDocument();

    const inputs = screen.getAllByRole('spinbutton');
    expect(inputs.length).toBe(8);

    const headingsLevel2 = screen.getAllByRole('heading', { level: 2 });
    expect(headingsLevel2[0]).toHaveTextContent('Input: Matriz 2x2');
    expect(headingsLevel2[1]).toHaveTextContent('Output: Matriz 2x2');
  });

  test('Test that increment and decrement buttons work correctly', () => {
    render(<MatrixContainer />);

    // Inicialmente, hay 8 inputs entre las 2 matrices (2x2 matriz)
    const inputs = screen.getAllByRole('spinbutton');
    expect(inputs.length).toBe(8);

    // Incrementar el tamaño de la matriz
    const incrementButton = screen.getByText('Incrementar');
    fireEvent.click(incrementButton);

    // Verificar que hay 18 inputs (3x3 matriz)
    const inputsIncremented = screen.getAllByRole('spinbutton');
    expect(inputsIncremented.length).toBe(18);

    // Decrementar el tamaño de la matriz varias veces y solo deberia haber 2 inputs (1x1 matriz)
    const decrementButton = screen.getByText('Remover');
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);

    // Verificar que hay 2 inputs (1x1 matriz)
    const inputsDecremented = screen.getAllByRole('spinbutton');

    expect(inputsDecremented.length).toBe(2);
  });

  test('rotateMatrix is called when matrixValues is updated', () => {
    render(<MatrixContainer />);

    // Inicialmente, la función rotateMatrix debe ser llamada con la matriz inicial
    expect(rotateMatrix).toHaveBeenCalledWith([
      [1, 2],
      [3, 4],
    ]);

    // Cambiar un valor en el input de la matriz
    const inputsIncremented = screen.getAllByRole('spinbutton');
    const firstInput = inputsIncremented[0];
    fireEvent.change(firstInput, { target: { value: '9' } });

    // Verificar que rotateMatrix se llamó con la matriz actualizada
    expect(rotateMatrix).toHaveBeenCalledWith([
      [9, 2],
      [3, 4],
    ]);
  });
});
