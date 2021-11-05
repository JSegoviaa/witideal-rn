import { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';

interface Location {
  latitude: number;
  longitude: number;
}

export const useLocation = () => {
  const [loading, setLoading] = useState(false);
  const [initialPosition, setInitialPosition] = useState<Location>();

  useEffect(() => {
    Geolocation.getCurrentPosition(
      ({ coords }) => {
        setInitialPosition({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });

        setLoading(true);
      },
      err => console.log({ err }),
      { enableHighAccuracy: true },
    );
  }, []);

  return { initialPosition, loading };
};
