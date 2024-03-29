// log the pageview with their URL
declare global {
	interface Window {
		gtag?: any
	}
}
export const pageview = (url: string) => {
	window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
		page_path: url,
	})
}

// log specific events happening.
export const event = ({ action, params }: any) => {
	window.gtag("event", action, params)
}
