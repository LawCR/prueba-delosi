import { MatrixContainer } from '@/features/matrix';
import { Title } from '@/features/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Matriz NxN',
  description:
    'Ejercicio de Matriz NxN que forma parte de la prueba para DELOSI que permite al usuario ingresar números a una matriz NxN y poder generar una copia pero rotada en sentido antihorario (-90 grados)',
  keywords: ['Matriz NxN', 'Matriz', 'NxN', 'DELOSI'],
  openGraph: {
    title: 'Matriz NxN',
    description:
      'Ejercicio de Matriz NxN que forma parte de la prueba para DELOSI que permite al usuario ingresar números a una matriz NxN y poder generar una copia pero rotada en sentido antihorario (-90 grados)',
  },
};

export default function HomePage() {
  return (
    <>
      <Title
        title='Matriz NxN'
        subtitle='Ejercicio de Matriz NxN que forma parte de la prueba para DELOSI, que permite manipular matrices de números. Los usuarios pueden incrementar o disminuir el tamaño de la matriz y actualizar los valores dentro de ella. La aplicación también muestra una versión rotada de la matriz en sentido antihorario (-90 grados).'
      />

      <MatrixContainer />
    </>
  );
}
