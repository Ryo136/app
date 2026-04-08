'use client';

import { useEffect, useState } from 'react';

type PermissionStateValue = 'granted' | 'denied' | 'prompt' | 'unknown';

export function useGeolocationTracker() {
  const [permission, setPermission] = useState<PermissionStateValue>('unknown');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.permissions) return;
    navigator.permissions
      .query({ name: 'geolocation' })
      .then((result) => {
        setPermission(result.state as PermissionStateValue);
        result.onchange = () => setPermission(result.state as PermissionStateValue);
      })
      .catch(() => setPermission('unknown'));
  }, []);

  const requestLocation = () =>
    new Promise<GeolocationPosition>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        resolve,
        (e) => {
          setError(e.message);
          reject(e);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 5000 }
      );
    });

  return { permission, requestLocation, error };
}
