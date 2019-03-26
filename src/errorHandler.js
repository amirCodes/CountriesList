export const handleError = (res) => {
    if (!res.ok) {
        console.log(res);
        throw new Error(res.status);
    }
    return res.json();
};