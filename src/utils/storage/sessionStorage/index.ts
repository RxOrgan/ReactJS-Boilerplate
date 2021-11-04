/**
 * setSessionStorage
 * @param data
 * @param key
 */
export function setSessionStorage(key: string, data: string) {
  if (typeof window === "undefined") {
    return;
  }
  sessionStorage.setItem(key, JSON.stringify(data));
}

/**
 * removeSessionStorage
 * @param key
 */
export function removeSessionStorage(key: string) {
  if (typeof window === "undefined") {
    return;
  }
  sessionStorage.removeItem(key);
}

/**
 * getSessionStorage
 * @param key
 */
export function getSessionStorage(key: string) {
  if (typeof window === "undefined") {
    return "";
  }

  return sessionStorage.getItem(key);
}
