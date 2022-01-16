import axios from "axios";

export const fetchChapterDetail = (id) => {
    return (dispatch) => {
        return axios.get(`http://localhost:5000/chapter/${id}`)
            .then(res => {
                dispatch(setChapterDetail(res.data));
            })
            .catch(error => console.log(error))
    }
}

export const setChapterDetail = (data) => ({
    type: 'SET_CHAPTER_DETAIL',
    data
})

export const addChapterDetail = (chapter) => {
    return axios.post('http://localhost:5000/chapter/add', chapter)
        .then(res => console.log(res))
        .catch(error => console.log(error))
}