// Calculate net WPM.
// Args:
//  correctCount: number of correctly typed characters
//  incorrectCount: -"-     incorrectly    -"
//  time: total time elapsed in milliseconds
export function wpm(correctCount, incorrectCount, time) {
  // Convert milliseconds to minutes
  time /= 1000;
  time /= 60;

  return Math.max(0, (correctCount / 5 / time) - (incorrectCount / time));
}

export function accuracy(correctCount, incorrectCount) {
  return (correctCount / (correctCount + incorrectCount)) * 100;
}
