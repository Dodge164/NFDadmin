export type TCarCardAction = {
  type: 'ADD_COLOR' | 'ADD_NAME';
  payload: string;
};

export const addColor = (color: string): TCarCardAction => ({
  type: 'ADD_COLOR',
  payload: color,
});
export const addName = (name: string): TCarCardAction => ({
  type: 'ADD_NAME',
  payload: name,
});
