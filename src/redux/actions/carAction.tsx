export type TCarAction = { type: 'ADD_COLOR' | 'ADD_NAME'; payload: string };

export const addColor = (color: string): TCarAction => ({
  type: 'ADD_COLOR',
  payload: color,
});
export const addName = (name: string): TCarAction => ({
  type: 'ADD_NAME',
  payload: name,
});
