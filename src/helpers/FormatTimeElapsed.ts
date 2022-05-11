export const formatTimeElapsed = (seconds: number): string => {
  let minuts = Math.floor(seconds / 60);
  seconds -= minuts * 60;

  let secString = `${seconds < 10 ? "0" + seconds : seconds}`;
  let minString = `${minuts < 10 ? "0" + minuts : minuts}`;

  return `${minString}:${secString}`;
};
