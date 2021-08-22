export const firebaseDataConverterToArray = (data) => {
    const result = []
    for (const key in data) {
        result.push({...data[key], id: key});
    }

    return result;
}
