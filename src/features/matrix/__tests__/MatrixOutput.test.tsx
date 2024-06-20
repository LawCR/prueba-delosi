import { render, screen } from '@testing-library/react';
import { MatrixOutput } from '../components/matrix-output/MatrixOutput';

describe('Testing MatrixOutput Component', () => {
  let matrixValues: number[][];
  let matrixSize: number;

  beforeEach(() => {
    matrixValues = [
      [1, 2],
      [3, 4],
    ];
    matrixSize = 2;
  });

  test('Render the MatrixInput with the correct number of inputs and values', () => {
    render(
      <MatrixOutput
        matrixValues={matrixValues}
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

  test('Test that input be readonly', () => {
    render(
      <MatrixOutput
        matrixValues={matrixValues}
        matrixSize={matrixSize}
      />
    );

    const input = screen.getByDisplayValue('1');
    expect(input).toHaveAttribute('readonly');
  });
});
