// format date from string to MM-DD-YYYY using Date.parse()
export const formatDate = (date: string) => {
  return new Date(Date.parse(date)).toLocaleDateString();
};
