# Add the Research Cases section

## What will be built
- Add a new **Research Cases** section immediately after **Our Team** and before **Research Activities** on `/en`, `/kk`, and `/ru`.
- Add a matching navigation link for the new section in all three languages.
- Render three accessible accordion rows with no global expand/collapse controls:
  - The first row contains the complete green-hydrogen case study and starts open so the content is immediately visible.
  - Rows two and three are closed placeholders labeled “Upcoming Case Study”, “Жақында”, or “Скоро”.
- Use the supplied English, Kazakh, and Russian copy exactly, including localized titles, tags, timeline, researchers, partners, locations, and methodology.

## Visual treatment
- Match the existing academic design system: navy accordion headers, white text, gold plus/minus icons, white or soft-slate content surfaces, slate borders, and restrained shadows.
- Keep the section responsive and readable: compact badge wrapping, clear metadata hierarchy, and stacked location details on small screens.
- Use the existing Playfair Display and Source Sans 3 typography and semantic color tokens rather than hardcoded component colors.

## Technical details
- Create a focused `ResearchCasesSection` component using the project’s existing accessible Radix accordion primitives and Lucide `PlusCircle` / `MinusCircle` icons.
- Store interface labels in the shared UI translation map and detailed case content in a typed localized data module.
- Insert the section into the single-page order and add its `#research-cases` anchor to desktop and mobile navigation.
- Verify type safety, production compilation, accordion interaction, language switching, and desktop/mobile layouts in the live preview.
