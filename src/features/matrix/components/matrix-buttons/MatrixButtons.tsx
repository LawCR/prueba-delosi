import React from 'react';

interface Props {
  matrixValues: number[][];
  setMatrixValues: React.Dispatch<React.SetStateAction<number[][]>>;
  matrixSize: number;
  setMatrixSize: React.Dispatch<React.SetStateAction<number>>;
}

export const MatrixButtons = ({
  matrixValues,
  setMatrixValues,
  matrixSize,
  setMatrixSize,
}: Props) => {
  
  const minSize = 1;
  const isMinSize = matrixSize === minSize;

  const incrementSize = () => {
    const newSize = matrixSize + 1;
    // Creando una nueva matriz con el nuevo tamaño
    const newMatrix = Array.from({ length: newSize }, (_, i) =>
      Array.from({ length: newSize }, (_, j) => matrixValues[i]?.[j] || 0)
    );
    setMatrixValues(newMatrix);
    setMatrixSize(newSize);
  };

  const decrementSize = () => {
    if (matrixSize > minSize) {
      const newSize = matrixSize - 1;
      const newMatrix = matrixValues
        .slice(0, newSize) // Removiendo filas
        .map((row) => row.slice(0, newSize)); // Removiendo columnas
      setMatrixValues(newMatrix);
      setMatrixSize(newSize);
    }
  };

  return (
    <div className='flex mb-4 gap-2'>
      <button onClick={decrementSize} className='btn-secondary' disabled={isMinSize}>
        Remover
      </button>
      <button onClick={incrementSize} className='btn-primary'>
        Incrementar
      </button>
    </div>
  );
};
