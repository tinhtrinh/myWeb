const initialState = {}

const chapterDetailReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_CHAPTER_DETAIL':
            state = action.data;
            return {...state}
        default:
            return state;
    }
}

export default chapterDetailReducer;