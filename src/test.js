function getSpiralMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < size; j += 1) {
      matrix[i][j] = null;
    }
  }

  let i = 0;
  let j = 0;
  let count = 1;
  let lives = 4;
  let dirSequence = ['right', 'down', 'left', 'up'];

  while (lives > 0) {
    for (let seqNum = 0; seqNum < dirSequence.length; seqNum += 1) {
      const dirrection = dirSequence[seqNum];

      if (matrix[i][j] === null) {
        matrix[i][j] = count;
        count += 1;
      }
      while (nextCellOfThisDirection(dirrection)) {}
    }
  }
}

function nextCellOfThisDirection(dir) {
  switch (dir) {
    case 'right':
      if (matrix[i][j] === null) {
        j += 1;
      }
      break;
    case 'down':
      break;
    case 'left':
      break;
    case 'up':
      break;

    default:
      throw new Error('Direction Keyword doesnt match');
  }
}
