import { formatDistanceToNow } from "date-fns";
import es from "date-fns/locale/es/index.js";
export function GetDiffTime(stringDate: string): string {
  const date: Date = new Date(stringDate);

  const distance: string = formatDistanceToNow(date, {
    includeSeconds: true,
    addSuffix: true,
    locale: es
  });

  return distance
}
