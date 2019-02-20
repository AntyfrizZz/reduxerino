export const timeToString = (date: Date): string => {
  const hours: number = date.getHours();
  const hoursAsString: string = hours < 10 ? '0' + hours : hours.toString();
  const minutes: number = date.getMinutes();
  const minutesAsString: string = minutes < 10 ? '0' + minutes : minutes.toString();
  const seconds: number = date.getSeconds();
  const secondsAsString: string = seconds < 10 ? '0' + seconds : seconds.toString();
  const miliseconds: number = date.getMilliseconds();
  const milisecondsAsString: string = miliseconds < 10 ? '00' + miliseconds : miliseconds < 100 ? '0' + miliseconds : miliseconds.toString();
  
  return `${hoursAsString}:${minutesAsString}:${secondsAsString}.${milisecondsAsString}`;
};
