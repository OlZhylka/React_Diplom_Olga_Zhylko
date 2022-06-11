import { SECTION_SET, SECTION_DELETE } from './helperForDispatch';

const initState={

  data: [],

}

function sectionReducer(state=initState, action) {
  switch (action.type) {
    case SECTION_SET: {
      let newState={
        data:{...state.data,
          [action.dataAct.slug]: {
             'title': action.dataAct.title,
            'author': action.dataAct.author}
        },
      };
      return newState;
    }
    case SECTION_DELETE: {
      delete state.data[action.dataAct]
      let newState={
        data:{...state.data},
      };
      return newState;
    }

    default:
      return state;
  }
}

export default sectionReducer;
