export const pick = (obj: { [key: string]: any }, fields: string[]) => {
  const newObj: { [key: string]: any } = {};

  for (const field of fields) {
    if (Object.hasOwnProperty.call(obj, field)) {
      newObj[field] = obj[field];
    }
  }
  return newObj;
};
