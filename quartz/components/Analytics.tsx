import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

/**
 * Vercel Web Analytics component for Quartz
 * This component injects the Vercel Analytics script into the page
 */
const Analytics: QuartzComponent = (_props: QuartzComponentProps) => {
  // Vercel Analytics script injection
  // The script is loaded from /_vercel/insights/script.js which is automatically
  // configured when Analytics is enabled in the Vercel dashboard
  return <script defer src="/_vercel/insights/script.js" data-vercel-analytics />
}

export default (() => Analytics) satisfies QuartzComponentConstructor
