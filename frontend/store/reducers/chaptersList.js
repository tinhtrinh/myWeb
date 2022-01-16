const initialState = {
    openChapterList: false,
    chaptersList: []
}

const chaptersListReducer = (state = initialState, action) => {
    switch (action.type){
        case 'SET_CHAPTERS_LIST':
            state.chaptersList = action.data;
            return {...state}
        case 'SET_CHAPTER':
            state.chapters.forEach((chapter) => {
                if(chapter.id === action.data.id){
                    chapter = action.data
                }
            })
            return {
                ...state,
                chapters: [...state.chapters]
            }
        case 'OPEN_CHAPTER_LIST':
            return {
                ...state,
                openChapterList: action.status
            }
        default:
            return state;
    }
}

export default chaptersListReducer;