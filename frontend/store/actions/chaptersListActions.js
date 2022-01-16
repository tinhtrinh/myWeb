import axios from 'axios';

export const fetchChaptersList = (pid) => {
    return (dispatch) => {
        return axios.get(`http://localhost:5000/chapter/product/${pid}`)
            .then(res => dispatch(setChaptersList(res.data)))
            .catch(error => console.log(error))
    }
}

export const setChaptersList = (data) => ({
    type: 'SET_CHAPTERS_LIST',
    data
})

export const setOpenChaptersList = ({ status }) => ({
    type: 'OPEN_CHAPTER_LIST',
    status
})