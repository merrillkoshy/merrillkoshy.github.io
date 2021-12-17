export interface Details {
	type: string
	source: string
	year: number
	url: string
	details: string
}
export interface Data {
	[key: string]: Details
}
