/**
 * Returns formatted date from input date string
 * @param {string} date Input date string
 * @returns {string} Localized date string formatted as MM/DD/YYYY
 */
export const formatDate = (date: string) => {
  return new Date(Date.parse(date)).toLocaleDateString();
};

/**
 * Capitalizes first letter of input string
 * @param {string} str Input string
 * @returns {string} String with capitalized first letter
 */
export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Returns function with debounced execution of inputFunction to prevent multiple calls in a short period of time
 * @param {any} inputFunction Function to which needs to be debounced
 * @param {number} wait Time in milliseconds to wait before executing inputFunction
 * @returns {function(): void} Debounced function
 */
export const debounce = (inputFunction: any, wait: number = 300) => {
  let timeout: any;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => inputFunction(...args), wait);
  };
};

/**
 * Parses JWT token and returns payload
 * @param {string} token JWT token
 * @returns {object} Payload of JWT token
 */
export const parseJwt = (token: string = '') => {
  const base64Url = token.split('.')[1];
  if (!token || !base64Url) return {};

  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join('')
  );

  return JSON.parse(jsonPayload);
};
