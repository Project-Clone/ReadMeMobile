



/*
    Action Types
*/
const LOAD_CONTENT_LIST = "LOAD_CONTNENT_LIST";
const ADD_CONTENT = "ADD_CONTENT"


/*
    Action Creators
*/

export const loadContentList = () => dispatch => {
    return {
        type: LOAD_CONTENT_LIST,
        contentList: []
    }
}  

export const addContent = content => ({
        type: ADD_CONTENT,
        content
})


/*
    Reducer
*/

export default function (contentList = [], action) {
    switch (action.type) {
        case LOAD_CONTENT_LIST:
            return action.contentList;
        case ADD_CONTENT:
            return [action.content, ...contentList];
        default:
            return contentList;
    }
}


