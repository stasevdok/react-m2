export const localeDateString = (date) => {
    if (!date) return;
    return new Date(date).toLocaleDateString('ru-RU')
}