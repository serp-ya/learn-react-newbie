import { INCREMENT, DELETE_ARTICLE } from '../typesConstants';

export function increment() {
    return {
        type: INCREMENT
    };
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    };
}