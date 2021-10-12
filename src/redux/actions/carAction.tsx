export type Action = { type: 'ADD_COLOR' | 'ADD_NAME'; payload: string };

export const addColor = (color: string): Action => ({
  type: 'ADD_COLOR',
  payload: color,
});
export const addName = (name: string): Action => ({
  type: 'ADD_NAME',
  payload: name,
});
