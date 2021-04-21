/**
 * @description 데이트 타입인지 체크
 * @param date
 * @returns boolean
 */
export function getIsDate(date: any): boolean {
  return Object.prototype.toString.call(date) === "[object Date]";
}

/**
 * @description 두 날짜의 일단위 차이를 리턴해주는 함수
 * @param date1 비교할 날짜
 * @param date2 비교할 날짜
 * @returns number
 */
export function getDateDiffIndays(date1: any, date2: any): number {
  if (!getIsDate(date1) || !getIsDate(date2)) return -1;
  return Math.floor(
    (Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate()) -
      Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate())) /
      (1000 * 60 * 60 * 24)
  );
}

/**
 * @description 배열 및 길이 체크
 * @param data  체크 할 데이터
 * @returns boolean
 */
export function getIsArray(data: any): boolean {
  return Array.isArray(data) && data.length > 0;
}
