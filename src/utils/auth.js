import Cookie from "js-cookie";

const tokenKey = "MY_REACT_TOKEN";

export function setToken(token) {
  return Cookie.set(tokenKey, token);
}

export function getToken() {
  return Cookie.get(tokenKey);
}

export function removeToken() {
  return Cookie.remove(tokenKey);
}
