const sortReducer = (
  state = {}, action
) => {
  const currentField = action.sortField;
  console.log(currentField);
  
  switch (action.type) {
    case "CHANGE_SORT": {
      if (state.currentField) {
        return {
          [currentField]: (state.currentField === 'low') ? 'high' : 'low'
        }
      }

      return {
        [currentField]: 'low'
      }
    }

    default:
      return state
  }
}

export default sortReducer;