export const parseDate = (value: string) => {
  const d = value.split('/');

  return `${d[2]}-${d[0]}-${d[1]}`;
};
