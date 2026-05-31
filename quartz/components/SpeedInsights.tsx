import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

/**
 * Vercel Speed Insights component for Quartz
 * This component injects the Vercel Speed Insights script into the page
 */
const SpeedInsights: QuartzComponent = (_props: QuartzComponentProps) => {
  // Vercel Speed Insights script injection
  // The script is loaded from /_vercel/speed-insights/script.js which is automatically
  // configured when Speed Insights is enabled in the Vercel dashboard
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };`,
        }}
      />
      <script defer src="/_vercel/speed-insights/script.js" />
    </>
  )
}

export default (() => SpeedInsights) satisfies QuartzComponentConstructor
