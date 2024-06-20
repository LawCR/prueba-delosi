'use client';

import { MatrixGridWrapper } from '../matrix-grid-wrapper/MatrixGridWrapper';

interface Props {
  matrixValues: number[][];
  setMatrixValues: React.Dispatch<React.SetStateAction<number[][]>>;
  matrixSize: number;
}

export const MatrixInput = ({
  matrixValues,
  setMatrixValues,
  matrixSize,
}: Props) => {
  const handleChange = (i: number, j: number, value: string) => {
    const newMatrix = matrixValues.map((row, rowIndex) =>
      row.map((col, colIndex) =>
        rowIndex === i && colIndex === j ? parseInt(value) || 0 : col
      )
    );
    setMatrixValues(newMatrix);
  };

  return (
    <>
      <MatrixGridWrapper
        title={`Input: Matriz ${matrixSize}x${matrixSize}`}
        matrixSize={matrixSize}
        matrixValues={matrixValues}
      >
        {matrixValues.map((row, i) =>
          row.map((col, j) => (
            <input
              key={`matrix-${i}-${j}`}
              type='number'
              value={col}
              onChange={(e) => handleChange(i, j, e.target.value)}
              onFocus={(e) => e.target.select()}
              placeholder='0'
              className='border p-2 text-center hover:bg-gray-100 focus:outline-none focus:ring-2  focus:border-transparent'
            />
          ))
        )}
      </MatrixGridWrapper>
    </>
  );
};
