// @ts-check

/**
 * Build an absolute path from a relative path to the project root.
 * @param {string} path
 * @returns {string}
 */
// @ts-ignore
export const pathFromRoot = path => new URL(`../../${path}`, import.meta.url).pathname

/**
 * Build an absolute path from a relative path to the project src folder.
 * @param {string} path
 * @returns {string}
 */
// @ts-ignore
export const pathFromSrc = path => new URL(`../${path}`, import.meta.url).pathname
