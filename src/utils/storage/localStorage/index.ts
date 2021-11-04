/**
 * setLocalStorage
 * @param data
 * @param key
 */
export function setLocalStorage(key: string, data: string) {
  if (typeof window === "undefined") {
    return;
  }
  localStorage.setItem(key, JSON.stringify(data));
}

/**
 * getLocalStorage
 * @param key
 */
export function getLocalStorage(key: string) {
  if (typeof window === "undefined") {
    return "";
  }

  return localStorage.getItem(key);
}

/**
 * removeLocalStorage
 * @param key
 */
export function removeLocalStorage(key: string) {
  if (typeof window === "undefined") {
    return;
  }
  localStorage.removeItem(key);
}
