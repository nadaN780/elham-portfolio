/**
 * A slim notice explaining the placeholders. It disappears automatically
 * once no pending content remains on the page (see globals: `:has()`).
 */
export function PlaceholderNotice() {
  return (
    <aside className="placeholder-notice" aria-label="About this preview">
      <p>
        <span className="pending__tag">Preview</span>
        Marked fields are placeholders awaiting Elham&rsquo;s real content.
      </p>
    </aside>
  );
}
