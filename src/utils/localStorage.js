export const getEmailFromLocalStorage = () => localStorage.getItem("email");
export const getTokenFromLocalStorage = () => localStorage.getItem("token");
export const setEmailInLocalStorage = (email) =>
  localStorage.setItem("email", email);
export const setTokenInLocalStorage = (token) =>
  localStorage.setItem("token", token);
export const clearLocalStorage = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("email");
};
