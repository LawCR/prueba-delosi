interface Props {
  title: string;
  matrixValues: number[][];
  children: React.ReactNode;
  matrixSize: number;
}

export const MatrixGridWrapper = ({
  children,
  matrixSize,
  title,
  matrixValues,
}: Props) => {
  const matrixWidth = matrixSize > 5 ? 40 : 75;

  return (
    <div className='w-full md:w-auto'>
      <h2 className='text-lg font-semibold mb-2'>{title}</h2>
      <div className='mb-4'>
        <p
          style={{ maxWidth: matrixSize * matrixWidth }}
          className='line-clamp-3 '
        >
          {JSON.stringify(matrixValues)}
        </p>
      </div>
      <div
        // role='grid'
        aria-label='matrix-grid'
        className='grid gap-[2px]'
        style={{
          gridTemplateColumns: `repeat(${matrixSize}, ${matrixWidth}px)`,
          gridAutoRows: `${matrixWidth}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
