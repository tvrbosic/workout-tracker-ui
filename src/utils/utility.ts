// Format date from string to MM-DD-YYYY using Date.parse()
export const formatDate = (date: string) => {
  return new Date(Date.parse(date)).toLocaleDateString();
};

// Capitalize first letter of string
export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
