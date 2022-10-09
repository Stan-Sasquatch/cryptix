type error = { error: any };
export function isError<T>(t: T | error): t is error {
	return (t as error).error !== undefined;
}
