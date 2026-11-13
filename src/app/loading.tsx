export default function Loading() {
  return (
    <div className="state-page state-page--loading" role="status" aria-live="polite">
      <span className="loader" aria-hidden="true" />
      <span className="visually-hidden">Loading</span>
    </div>
  );
}
