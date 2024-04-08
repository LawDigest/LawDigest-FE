export default function getDDay() {
  const startDate = new Date();
  const endDate = new Date('2024-04-10');
  const diff = startDate.getTime() - endDate.getTime();
  const dday = Math.floor(diff / (1000 * 3600 * 24));

  return dday;
}
