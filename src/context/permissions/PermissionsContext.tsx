import React, { createContext, FC, useState } from 'react';
import { PermissionStatus } from 'react-native-permissions';

export interface PermissionsState {
  locationStatus: PermissionStatus;
}

export const permissionsInitState: PermissionsState = {
  locationStatus: 'unavailable',
};

type PermissionsContextProps = {
  permissions: PermissionsState;
  askLocationPermission: () => void;
  checkLocationPermission: () => void;
};

export const PermissionsContext = createContext({} as PermissionsContextProps);

const PermissionsProvider: FC = ({ children }) => {
  const [permissions, setPermissions] = useState(permissionsInitState);

  const askLocationPermission = () => {};
  const checkLocationPermission = () => {};

  return (
    <PermissionsContext.Provider
      value={{ permissions, askLocationPermission, checkLocationPermission }}>
      {children}
    </PermissionsContext.Provider>
  );
};

export default PermissionsProvider;
