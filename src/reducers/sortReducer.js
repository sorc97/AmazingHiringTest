const sortReducer = (
  state = {}, action
) => {
  const currentField = action.sortField;
  
  switch (action.type) {
    case "CHANGE_SORT": {
      if (state.currentField === currentField) {
        return {
          currentField,
          value: (state.value === 'low') ? 'high' : 'low'
        }
      }

      return {
        currentField,
        value: 'low'
      }
    }

    default:
      return state
  }
}

export default sortReducer;