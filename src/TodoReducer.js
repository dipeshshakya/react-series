export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case 'DELETE':
      return {
        ...state,
        data: state.data.filter((data, index) => index !== action.payload),
      };
    case 'EDIT':
      console.log('edit');
      break;
    default:
      return state;
  }
};
