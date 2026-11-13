"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="state-page">
      <div className="container state-page__inner">
        <p className="eyebrow">Something went wrong</p>
        <h1 className="state-page__title">This page couldn&rsquo;t load.</h1>
        <p className="state-page__text">Please try again. If the problem continues, return to the home page.</p>
        <div className="state-page__actions">
          <button type="button" className="btn btn--primary" onClick={() => reset()}>
            <span>Try again</span>
          </button>
          <Link href="/" className="btn btn--secondary">
            <span>Return home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
