const repeat = (str = '', n = 2) => {
    let finalString = '';
    for (let i = 0; i < n; i++) {
        finalString += str;
    }
    return finalString;
};