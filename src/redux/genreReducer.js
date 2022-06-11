import { GENRE_SET } from './helperForDispatch';

const initState={

  status: 0, // 0 - ничего не началось, 1 - идёт загрузка, 2 - была ошибка, 3 - данные загружены
  data: null,

}

function genreReducer(state=initState, action) {
  switch (action.type) {
    case GENRE_SET: {
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

export default genreReducer;
