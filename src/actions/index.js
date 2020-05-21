export const increment = () => {
  return {
    type: 'INCREMENT',
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

export const custom = number => {
  return {
    type: 'CUSTOM',
    payload: number,
  };
};
