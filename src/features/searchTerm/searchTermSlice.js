const initialSearch = ''

export const searchTermReducer = (search = initialSearch, action) => {
  switch (action.type) {
    case 'searchTerm/setSearchTerm':
      return action.payload;
    case 'searchTerm/clearSearchTerm':
      return '';
    default:
      return search;
  }
}

export function setSearchTerm(term) {
  return {
    type: 'searchTerm/setSearchTerm',
    payload: term
  }
}

export function clearSearchTerm() {
  return {
    type: 'searchTerm/clearSearchTerm'
  }
}
