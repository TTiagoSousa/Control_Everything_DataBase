export function validDate(date: string): boolean {
  const regex = /^\d{2}\/\d{2}\/\d{2}(\d{2})?$/;
  if (!regex.test(date)) return false;

  const [day, month, year] = date.split('/').map(Number);
  const parsedDate = new Date(year < 100 ? year + 2000 : year, month - 1, day);

  return parsedDate.getDate() === day &&
         parsedDate.getMonth() === month - 1 &&
         parsedDate.getFullYear() === (year < 100 ? year + 2000 : year);
}