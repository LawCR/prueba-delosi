import Image from 'next/image';
import Link from 'next/link';

export const TopMenu = () => {
  return (
    <header className='flex items-center h-14 px-4 border-b border-gray-300 sm:h-16 md:px-6'>
      <Link className='flex items-center gap-2 font-semibold' href='/'>
        <Image
          src='/next.svg'
          alt='Vercel Logo'
          width={80}
          height={24}
          priority
        />
      </Link>
    </header>
  );
};
