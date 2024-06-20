
import { render, screen } from '@testing-library/react';
import { MatrixGridWrapper } from '../components/matrix-grid-wrapper/MatrixGridWrapper';

describe('Testing MatrixGridWrapper Component', () => {

  const title: string = 'Test Matrix';
  const matrixValues = [
    [1, 2],
    [3, 4],
  ];
  const matrixSize = 2;


  test('Render the MatrixGridWrapper component with the correct title and children', () => {
    render(
      <MatrixGridWrapper
        title={title}
        matrixValues={matrixValues}
        matrixSize={matrixSize}
      >
        <p>Children</p>
      </MatrixGridWrapper>
    );

  
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
    const ChildrenElement = screen.getByText('Children');
    expect(ChildrenElement).toBeInTheDocument();
  });
  
  test('Renders the MatrixGridWrapper component with the matrix values correctly', () => {
    render(
      <MatrixGridWrapper
        title={title}
        matrixValues={matrixValues}
        matrixSize={matrixSize}
      >
        <p>Children</p>
      </MatrixGridWrapper>
    );

    const matrixValuesElement = screen.getByText(JSON.stringify(matrixValues));
    expect(matrixValuesElement).toBeInTheDocument();
  });

  test('Test that the MatrixGridWrapper component applies correct styles for the grid and matrix size.', () => {
    render(
      <MatrixGridWrapper
        title={title}
        matrixValues={matrixValues}
        matrixSize={matrixSize}
      >
        <div>Children</div>
      </MatrixGridWrapper>
    );

    const gridElement = screen.getByLabelText('matrix-grid');
    // screen.debug(gridElement);
    expect(gridElement).toHaveStyle({
      gridTemplateColumns: `repeat(${matrixSize}, 75px)`,
      gridAutoRows: '75px',
    });
  });

  test('applies correct width for larger matrix sizes', () => {
    const matrixSize = 6;

    render(
      <MatrixGridWrapper
        title={title}
        matrixValues={matrixValues}
        matrixSize={matrixSize}
      >
        <div>Child Content</div>
      </MatrixGridWrapper>
    );
    
    const matrixValuesElement = screen.getByText(JSON.stringify(matrixValues));
    // screen.debug(matrixValuesElement);
    expect(matrixValuesElement).toHaveStyle({
      maxWidth: `${matrixSize * 40}px`,
    });
  });
})