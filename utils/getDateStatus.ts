export default function getDateStatus(date: Date) {
  const today = new Date();
  const inputDate = new Date(date);

  // 이번 주의 시작일과 종료일 계산
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());

  const endOfWeek = new Date(today);
  endOfWeek.setDate(today.getDate() + (6 - today.getDay()));

  // 이번 달의 시작일과 종료일 계산
  const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  // 날짜 상태 확인
  if (inputDate >= startOfWeek && inputDate <= endOfWeek) {
    return '이번 주';
  }
  if (inputDate >= startOfMonth && inputDate <= endOfMonth) {
    return '이번 달';
  }
  return '더 이전';
}
