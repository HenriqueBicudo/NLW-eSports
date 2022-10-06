export function convertHourStringToMinutes(hoursString: string) {
  const [hour, minutes] = hoursString.split(':').map(Number);

  const minutesAmount = hour * 60 + minutes;

  return minutesAmount;
}