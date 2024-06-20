
export const rotateMatrix = (matrix: number[][]): number[][] => {
  const N = matrix.length;
  const rotatedMatrix = Array.from({ length: N }, () => Array(N).fill(0));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      rotatedMatrix[N - j - 1][i] = matrix[i][j];
    }
  }
  return rotatedMatrix;
};