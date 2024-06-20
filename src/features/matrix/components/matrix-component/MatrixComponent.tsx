'use client';

interface Props {
  matrixValues: number[][];
  rotatedMatrixValues: number[][];
  setMatrixValues: React.Dispatch<React.SetStateAction<number[][]>>;
  matrixSize: number;
  setMatrixSize: React.Dispatch<React.SetStateAction<number>>;
}

export const MatrixComponent = ({
  matrixValues,
  rotatedMatrixValues,
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
    <div className='flex flex-col sm:flex-row gap-4'>
      <div
        className='grid gap-2'
        style={{ gridTemplateColumns: `repeat(${matrixSize}, 80px)` }}
      >
        {matrixValues.map((row, i) =>
          row.map((col, j) => (
            <input
              key={`${i}-${j}`}
              type='number'
              value={col}
              onChange={(e) => handleChange(i, j, e.target.value)}
              className='border p-2 text-center h-20'
            />
          ))
        )}
      </div>
      <div
        className='grid gap-2 '
        style={{ gridTemplateColumns: `repeat(${matrixSize}, 80px)` }}
      >
        {rotatedMatrixValues.map((row, i) =>
          row.map((col, j) => (
            <div
              key={`${i}-${j}`}
              className='border p-2 text-center h-20'
            >
              {col}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
