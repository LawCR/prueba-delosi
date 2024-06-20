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
    {/* <div className='w-full flex flex-col items-center'> */}
      <h2 className='text-lg font-semibold  mb-2'>{title}</h2>
      <div className='mb-4'>
        <p
          style={{ maxWidth: matrixSize * matrixWidth }}
          className='line-clamp-3 '
        >
          {JSON.stringify(matrixValues)}
        </p>
      </div>
      <div
        // className='grid sm:justify-center gap-[2px]'
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
