export type CarAction = { type: 'ADD_COLOR' | 'ADD_NAME'; payload: string };

export const addColor = (color: string): CarAction => ({
  type: 'ADD_COLOR',
  payload: color,
});
export const addName = (name: string): CarAction => ({
  type: 'ADD_NAME',
  payload: name,
});
