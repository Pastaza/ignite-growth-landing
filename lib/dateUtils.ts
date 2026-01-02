import { format, formatDistanceToNow, isAfter, isBefore, addDays, parseISO } from 'date-fns';

export function formatDate(date: Date | string, formatStr: string = 'MMM dd, yyyy'): string {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, formatStr);
}

export function formatRelativeDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return formatDistanceToNow(dateObj, { addSuffix: true });
}

export function isExpired(expirationDate: string | Date): boolean {
  const date = typeof expirationDate === 'string' ? parseISO(expirationDate) : expirationDate;
  return isBefore(date, new Date());
}

export function isExpiringSoon(expirationDate: string | Date, daysThreshold: number = 30): boolean {
  const date = typeof expirationDate === 'string' ? parseISO(expirationDate) : expirationDate;
  const thresholdDate = addDays(new Date(), daysThreshold);
  return isAfter(thresholdDate, date) && !isExpired(date);
}

export function getDaysUntilExpiration(expirationDate: string | Date): number {
  const date = typeof expirationDate === 'string' ? parseISO(expirationDate) : expirationDate;
  const now = new Date();
  const diffTime = date.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return Math.max(0, diffDays);
}
