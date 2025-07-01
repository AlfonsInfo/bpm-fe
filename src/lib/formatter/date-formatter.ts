export function formatDateToYMD(date: Date | null) {
  if (!date) return null;
  const year = date.getFullYear();
  const month = (`0${date.getMonth() + 1}`).slice(-2); // 0-pad
  const day = (`0${date.getDate()}`).slice(-2);
  return `${year}-${month}-${day}`;
}