import { MatrixContainer } from '@/features/matrix';
import { Title } from '@/features/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Matriz NxN',
  description: 'Ejercicio de Matriz NxN que forma parte de la prueba para Defosi que permite al usuario ingresar un número entero y generar una matriz de NxN y poder generar una copia pero rotada en sentido antihorario (90 grados)',
};

export default function HomePage() {
  return (
    <div>
      <Title title='Matriz NxN' subtitle='Ejercicio de Matriz' />

      <MatrixContainer />
    </div>
  );
}
