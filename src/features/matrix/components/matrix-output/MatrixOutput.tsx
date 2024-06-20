'use client';

import { MatrixGridWrapper } from '../matrix-grid-wrapper/MatrixGridWrapper';

interface Props {
  matrixValues: number[][];
  matrixSize: number;
}

export const MatrixOutput = ({ matrixValues, matrixSize }: Props) => {
  return (
    <>
      <MatrixGridWrapper
        title={`Output: Matriz ${matrixSize}x${matrixSize} (-90°)`}
        matrixSize={matrixSize}
        matrixValues={matrixValues}
      >
        {matrixValues.map((row, i) =>
          row.map((col, j) => (
            <input
              key={`matrix-rotated-${i}-${j}`}
              type='number'
              value={col}
              placeholder='0'
              readOnly
              className='border p-2 text-center focus:outline-none'
            />
          ))
        )}
      </MatrixGridWrapper>
    </>
  );
};
