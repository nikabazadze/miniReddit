/**
 * Shorten link
 * @param {string} link link to shorten
 */
export function shortLink(link) {
    const startIndex = link.indexOf('www.') + 4;
    const dotIndex = link.indexOf('.', startIndex);
    return link.slice(startIndex, dotIndex + 10) + '...';
}