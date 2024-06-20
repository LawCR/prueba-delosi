import { render, screen, fireEvent } from '@testing-library/react';
import { MatrixInput } from '../components/matrix-input/MatrixInput';

describe('Testing MatrixInput Component', () => {
  let matrixValues: number[][];
  let setMatrixValues: jest.Mock;
  let matrixSize: number;

  beforeEach(() => {
    matrixValues = [
      [1, 2],
      [3, 4],
    ];
    setMatrixValues = jest.fn();
    matrixSize = 2;
  });

  test('Render the MatrixInput with the correct number of inputs and values', () => {
    render(
      <MatrixInput
        matrixValues={matrixValues}
        setMatrixValues={setMatrixValues}
        matrixSize={matrixSize}
      />
    );

    const inputs = screen.getAllByRole('spinbutton');
    expect(inputs).toHaveLength(4);
    expect(inputs[0]).toHaveValue(1);
    expect(inputs[1]).toHaveValue(2);
    expect(inputs[2]).toHaveValue(3);
    expect(inputs[3]).toHaveValue(4);
  });

  test('Test that calls setMatrixValues on input change', () => {
    render(
      <MatrixInput
        matrixValues={matrixValues}
        setMatrixValues={setMatrixValues}
        matrixSize={matrixSize}
      />
    );

    const input = screen.getByDisplayValue('1');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: '5' } });

    expect(setMatrixValues).toHaveBeenCalledWith([
      [5, 2],
      [3, 4],
    ]);
  });
});
