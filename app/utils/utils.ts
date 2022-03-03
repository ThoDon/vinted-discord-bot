const removeDiacritics = (str: string): string => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const convertToLowerCaseWithoutAccent = (str: string): string => {
    return removeDiacritics(str).toLowerCase();
};

export const filterItemsBasedOnProperty = (
    property: string,
    filters: string[]
): boolean => {
    return filters.some((filter) => {
        return convertToLowerCaseWithoutAccent(property).includes(
            convertToLowerCaseWithoutAccent(filter)
        );
    });
};
