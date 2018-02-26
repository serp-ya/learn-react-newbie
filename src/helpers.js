export function arrToMap(array) {
    return array.reduce((result, comment) => {
        result[comment.id] = comment;
        return result;
    }, {});
}