'use client';

import React, { useEffect, useState } from 'react';
import { MatrixOutput } from '../matrix-output/MatrixOutput';
import { MatrixButtons } from '../matrix-buttons/MatrixButtons';
import { MatrixInput } from '../matrix-input/MatrixInput';
import { Arrow } from '@/icons';

const rotateMatrix = (matrix: number[][]): number[][] => {
  const N = matrix.length;
  const rotatedMatrix = Array.from({ length: N }, () => Array(N).fill(0));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      rotatedMatrix[N - j - 1][i] = matrix[i][j];
    }
  }
  return rotatedMatrix;
};

export const MatrixContainer = () => {
  const initialMatrix = [
    [1, 2],
    [3, 4],
  ];
  
  const [matrixValues, setMatrixValues] = useState<number[][]>(initialMatrix);
  const [rotatedMatrixValues, rotatedMetMatrixValues] = useState<number[][]>(
    rotateMatrix(initialMatrix)
  );
  const [matrixSize, setMatrixSize] = useState<number>(2);

  useEffect(() => {
    rotatedMetMatrixValues(rotateMatrix(matrixValues));
  }, [matrixValues]);

  return (
    <div>
      <MatrixButtons
        matrixValues={matrixValues}
        setMatrixValues={setMatrixValues}
        matrixSize={matrixSize}
        setMatrixSize={setMatrixSize}
      />
      <div className='flex flex-col sm:flex-row items-center gap-4'>
        <MatrixInput
          matrixValues={matrixValues}
          setMatrixValues={setMatrixValues}
          matrixSize={matrixSize}
          setMatrixSize={setMatrixSize}
        />
        <div className='rotate-90 sm:rotate-0'>
          <Arrow />
        </div>
        <MatrixOutput
          matrixValues={rotatedMatrixValues}
          matrixSize={matrixSize}
        />
      </div>
    </div>
  );
};
