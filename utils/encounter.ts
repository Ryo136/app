import { Semester } from '@/lib/types';

export type GeoPoint = { lat: number; lng: number; accuracy: number; capturedAt: Date };

const EARTH_RADIUS_M = 6371000;

export function distanceMeters(a: Pick<GeoPoint, 'lat' | 'lng'>, b: Pick<GeoPoint, 'lat' | 'lng'>) {
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;

  const x =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLng / 2) * Math.sin(dLng / 2) * Math.cos(lat1) * Math.cos(lat2);

  return 2 * EARTH_RADIUS_M * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
}

export function isEncounterValid(a: GeoPoint, b: GeoPoint, targetRadius = 5) {
  const distance = distanceMeters(a, b);
  const adjustedThreshold = targetRadius + Math.min(a.accuracy, 20) / 2 + Math.min(b.accuracy, 20) / 2;
  return distance <= adjustedThreshold;
}

export function isWithinTrackingWindow(date = new Date()) {
  const h = date.getHours();
  const m = date.getMinutes();
  const minutes = h * 60 + m;
  const ranges = [
    [15 * 60 + 15, 17 * 60 + 45],
    [19 * 60, 21 * 60]
  ];
  return ranges.some(([start, end]) => minutes >= start && minutes <= end);
}

export function canPublishTodayResult(date = new Date()) {
  const minutes = date.getHours() * 60 + date.getMinutes();
  return minutes >= 21 * 60 + 30;
}

export function semesterFromDate(date = new Date()): Semester {
  const month = date.getMonth() + 1;
  return month >= 4 && month <= 9 ? 'spring' : 'fall';
}

export function isDuplicateSameDay(userA: string, userB: string, dateISO: string, cache: Set<string>) {
  const key = [userA, userB].sort().join(':') + ':' + dateISO;
  if (cache.has(key)) return true;
  cache.add(key);
  return false;
}
