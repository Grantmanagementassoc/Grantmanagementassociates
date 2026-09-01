# Enhance Individual Service Pages with Rich Vertical Layout

The goal is to render the rich HTML content provided for each service page in a beautiful, mobile-friendly, vertical layout (including vertical flowcharts for the process steps) without losing any of the custom copywriting.

## Proposed Changes

### `src/app/services/[slug]/page.tsx`
- **Restore `contentHtml` rendering:** Re-introduce the rendering of `service.contentHtml` which contains all the rich copy ("OUR APPROACH", "WHY GMA", "RESULTS", etc.).
- **Add `enhanceHtml` utility:** Write a robust HTML transformation function that intercepts the raw HTML before rendering and upgrades the UI:
  - **Vertical Flowchart for Steps:** Replaces `<p><strong>STEP XX...</strong></p><p>...</p>` with a custom HTML structure featuring a left border, glowing dots, and beautiful typography to create a vertical timeline.
  - **Section Headers:** Upgrades `<p><strong>OUR APPROACH</strong></p>` into large, gradient text `<h2>` tags for visual hierarchy.
  - **Glass Lists:** Upgrades standard `<ul><li>` tags into a CSS grid of `GlassCard`-style items with glowing bullet points.
- This approach completely preserves all original text while applying the premium design language (glassmorphism, gradients, animations) universally across all 10 service pages.

### `src/components/services/service-process-flowchart.tsx`
- We will no longer need this component since the flowchart will be dynamically generated from the rich text, preserving the custom copy. I will delete this file.

## Verification Plan
1. Start the dev server.
2. Verify that `/services/grant-writing` correctly renders a vertical, mobile-friendly flowchart for the "OUR APPROACH" steps.
3. Verify that the "WHY GMA" and "RESULTS" sections appear beautifully.
4. Verify that the layout looks premium on both desktop and mobile views.
