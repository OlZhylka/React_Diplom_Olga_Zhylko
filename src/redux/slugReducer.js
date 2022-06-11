import { BOOKS_LOADING, BOOKS_ERROR, BOOKS_SET } from './helperForDispatch';

const initState={

  status: 0, // 0 - ничего не началось, 1 - идёт загрузка, 2 - была ошибка, 3 - данные загружены
  data: null,

}

function slugReducer(state=initState,action) {
  switch (action.type) {
    case 'SLUG_SET': {
      let newState={
        status:1,
        data:action.dataAct,
      };
      return newState;
    }

    default:
      return state;
  }
}

export default slugReducer;
