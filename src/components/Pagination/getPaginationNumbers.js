export default function getPaginationNumbers(curentPage, total) {
    const maxPage = Math.ceil(total / 9);
    const min = curentPage < 3 ? 1 : maxPage < curentPage + 2 ? maxPage - 4 : curentPage - 2;
    const max = (min + 4) > maxPage ? maxPage : min + 4;
    return Array.apply(null, { length: max + 1 - min }).map(function (item, index) {
        return index + min;
    });
}