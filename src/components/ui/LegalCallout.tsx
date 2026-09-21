interface LegalCalloutProps {
  title: string;
  text: string;
}

/**
 * Highlighted note inside a legal document.
 *
 * Used for the single statement that has to survive skim-reading — that TirzeFlow
 * records a prescription and never issues one. `role="note"` keeps that emphasis
 * available to screen readers, which do not see the border.
 */
export function LegalCallout({ title, text }: LegalCalloutProps) {
  return (
    <aside
      role="note"
      className="my-6 rounded-md border-l-2 border-brand-mint bg-brand-mint/5 px-5 py-4"
    >
      <p className="font-semibold text-brand-teal">{title}</p>
      <p className="mt-2 text-brand-ice/80">{text}</p>
    </aside>
  );
}
