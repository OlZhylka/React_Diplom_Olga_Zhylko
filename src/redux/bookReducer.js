import { BOOK_LOADING, BOOK_ERROR, BOOK_SET } from './helperForDispatch';

const initState={

  status: 0, // 0 - ничего не началось, 1 - идёт загрузка, 2 - была ошибка, 3 - данные загружены
  data: null,

}

function bookReducer(state=initState,action) {
  switch (action.type) {
    case BOOK_LOADING: {
      let newState={
        status:1,
        data:null,
      };
      return newState;
    }
    case BOOK_SET: {
      let newState={
        status:1,
        data:action.dataAct,
      };
      return newState;
    }
    case BOOK_ERROR: {
      let newState={
        status:2,
        data:null,
      };
      return newState;
    }
    
    default:
      return state;
  }
}

export default bookReducer;
