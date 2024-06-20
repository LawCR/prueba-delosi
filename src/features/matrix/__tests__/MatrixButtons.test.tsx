import { render, screen, fireEvent } from '@testing-library/react';
import { MatrixButtons } from '../components/matrix-buttons/MatrixButtons';

describe('Testing MatrixButtons Component', () => {
  let matrixValues: number[][];
  let setMatrixValues: jest.Mock;
  let matrixSize: number;
  let setMatrixSize: jest.Mock;

  const initialMatrix = [
    [1, 2],
    [3, 4],
  ];

  beforeEach(() => {
    matrixValues = initialMatrix;
    setMatrixValues = jest.fn();
    matrixSize = 2;
    setMatrixSize = jest.fn();
  });

  test('Render the MatrixButtons Component', () => {
    render(
      <MatrixButtons
        matrixValues={matrixValues}
        setMatrixValues={setMatrixValues}
        matrixSize={matrixSize}
        setMatrixSize={setMatrixSize}
      />
    );

    const incrementButton = screen.getByText('Incrementar');
    const decrementButton = screen.getByText('Remover');

    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
  });

  test('Test that the increment button increases the size of the matrix', () => {
    render(
      <MatrixButtons
        matrixValues={matrixValues}
        setMatrixValues={setMatrixValues}
        matrixSize={matrixSize}
        setMatrixSize={setMatrixSize}
      />
    );

    const incrementButton = screen.getByText('Incrementar');
    fireEvent.click(incrementButton);

    expect(setMatrixSize).toHaveBeenCalledWith(3);
    expect(setMatrixValues).toHaveBeenCalledWith([
      [1, 2, 0],
      [3, 4, 0],
      [0, 0, 0],
    ]);
  });

  test('Test that the decrement button decreases the size of the matrix', () => {
    render(
      <MatrixButtons
        matrixValues={matrixValues}
        setMatrixValues={setMatrixValues}
        matrixSize={matrixSize}
        setMatrixSize={setMatrixSize}
      />
    );

    const decrementButton = screen.getByText('Remover');
    fireEvent.click(decrementButton);

    expect(setMatrixSize).toHaveBeenCalledWith(1);
    expect(setMatrixValues).toHaveBeenCalledWith([[1]]);
  });

  test('Test that the decrement button is disabled when matrixSize equals minSize', () => {
    
    matrixSize = 1;
    matrixValues = [[1]];

    render(
      <MatrixButtons
        matrixValues={matrixValues}
        setMatrixValues={setMatrixValues}
        matrixSize={matrixSize}
        setMatrixSize={setMatrixSize}
      />
    );
    
    const decrementButton = screen.getByText('Remover');
    expect(decrementButton).toBeDisabled();
  });
});
