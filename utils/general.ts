import { decode } from 'html-entities';

export const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const cleanButterText = (string: string) => {
    return decode(
        string
            .replaceAll('<span>', '')
            .replaceAll('</span>', '')
            .replace(/<h2[^>]*./, '')
            .replace('</h2>', ''),
    );
};
