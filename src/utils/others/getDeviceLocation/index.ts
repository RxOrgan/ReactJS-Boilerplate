/**
 * getDeviceLocation
 * @param onSuccess
 * @param onError
 */
export const getDeviceLocation = ({
  onSuccess,
  onError,
}: {
  onSuccess: ({ lat, lon }: { lat: string; lon: string }) => void;
  onError: () => void;
}) => {
  navigator.geolocation.getCurrentPosition(
    ({ coords: { latitude: lat, longitude: lon } }: AnyObj) => {
      onSuccess({ lat, lon });
    },
    () => {
      onError();
    },
  );
};
