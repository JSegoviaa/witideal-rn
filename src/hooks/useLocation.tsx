import { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';

interface Location {
  latitude: number;
  longitude: number;
}

export const useLocation = () => {
  const [loading, setLoading] = useState(false);
  const [userPosition, setInitialPosition] = useState<Location>();

  useEffect(() => {
    getCurrentLocation().then(location => {
      setInitialPosition(location);
      setLoading(true);
    });
  }, []);

  const getCurrentLocation = (): Promise<Location> => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        ({ coords }) => {
          resolve({
            latitude: coords.latitude,
            longitude: coords.longitude,
          });
        },
        err => reject({ err }),
        { enableHighAccuracy: true },
      );
    });
  };

  return { userPosition, loading, getCurrentLocation };
};
