import { FlatJSONObject, JSONObject } from '@types';

export const flatJsonObject = (obj: JSONObject) => {
  const res: FlatJSONObject = {};
  const flat = (props: { object: JSONObject; prev?: string }) => {
    const { object, prev } = props;

    Object.keys(object).forEach((key) => {
      const value = object[key];
      const newKey = prev ? `${prev}.${key}` : key;

      if (typeof value === 'object' && Object.keys(value).length) {
        flat({ object: value, prev: newKey });
      } else {
        res[newKey] = value as string;
      }
    });
  };

  flat({ object: obj });

  return res;
};
