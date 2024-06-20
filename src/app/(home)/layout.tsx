import { Footer, TopMenu } from '@/features/ui';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='flex flex-col min-h-screen w-full '>
      <TopMenu />
        <main className='flex-1 p-4 md:px-6 overflow-x-auto'>
          {children}
        </main>
      <Footer />
    </main>
  );
}
