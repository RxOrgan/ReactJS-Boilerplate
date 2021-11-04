/**
 * setCookie
 * @description add new cookie item
 * @param name
 * @param value
 * @param days
 * @param path
 * @param domain
 */
export function setCookie({
  name,
  value,
  days,
  path = "/",
  domain,
}: {
  name: string;
  value: string | number | boolean;
  days?: number;
  path?: string;
  domain?: string;
}) {
  let expires = "";
  let cookie = `${name}=${value || ""}${expires}; path=${path}`;
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  if (domain) {
    cookie += `; domain=${domain}`;
  }
  document.cookie = cookie;
}

/**
 * getCookie
 * @description det cookie by name
 * @param name
 */
export function getCookie(name: string) {
  if (typeof document === "undefined") return null;
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }

  return null;
}

/**
 * removeCookie
 * @description delete cookie by name
 * @param name
 */
export function removeCookie(name: string, domain?: string) {
  document.cookie = `${name}=1; path=/;${
    domain ? ` Domain=${domain};` : ""
  } expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}
