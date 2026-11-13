import { Button } from "@/components/ui/Button";
import { Spark } from "@/components/ui/Spark";

export default function NotFound() {
  return (
    <div className="state-page">
      <div className="container state-page__inner">
        <Spark size={28} />
        <p className="eyebrow">Error 404</p>
        <h1 className="state-page__title">This page hasn&rsquo;t been written yet.</h1>
        <p className="state-page__text">The link may be outdated, or the address may contain a typo.</p>
        <div className="state-page__actions">
          <Button href="/">Return home</Button>
          <Button href="/work" variant="secondary">
            See the work
          </Button>
        </div>
      </div>
    </div>
  );
}
