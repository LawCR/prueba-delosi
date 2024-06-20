import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
}

export const Title = ({ title, subtitle }: Props) => {
  return (
    <div className={`mt-0 px-0`}>
      <h1 className={`antialiased text-2xl font-semibold mb-2`}>
        {title}
      </h1>

      <div className='flex justify-between items-center mb-6 sm:mb-8'>
        {subtitle && <h2 className=''>{subtitle}</h2>}
      </div>
    </div>
  );
};
