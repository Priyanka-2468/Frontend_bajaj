export const isValidJSON = (str) => {
    try {
        JSON.parse(str);
        return true;
    } catch {
        return false;
    }
};
