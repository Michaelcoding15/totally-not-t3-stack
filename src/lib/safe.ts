/**
 * This function will try and catch a passed in function, and return either the result or an error depending on if the function succeeds.
 * @template T
 * @template E
 * @param {() => T} func The function you want to pass in.
 * @returns {[null, T | E, null]} The result.
 * @example
 * const [err, result] = safeTry(mayError);
 * if (err) return; // Error handling
 * // You can now use result.
 */
export function safeTry<T, E = Error>(func: () => T): [null, T] | [E, null] {
	try {
		const result = func();
		return [null, result]
	} catch (error) {
		return [error as E, null]
	}
}

/**
 * This function will try and catch a passed in async function, and return either the result or an error depending on if the function succeeds.
 * @template T
 * @template E
 * @param {() => Promise<T>} func The async function you want to pass in.
 * @returns {Promise<[null, T | E, null]>} The result.
 * @example
 * const [err, result] = await safeAwait(mayError);
 * if (err) return; // Error handling
 * // You can now use result.
 */
export async function safeAwait<T, E = Error>(func: () => Promise<T>): Promise<[null, T] | [E, null]> {
	try {
		const result = await func();
		return [null, result]
	} catch (error) {
		return [error as E, null]
	}
}