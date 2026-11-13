import Image from "next/image";
import { isPending, plain, type ContentImage } from "@/lib/content";
import { Text } from "./Text";

type MediaProps = {
  image: ContentImage;
  /** CSS aspect ratio for the frame, e.g. "3 / 2". */
  ratio?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** Short label shown inside an empty frame. */
  emptyLabel?: string;
};

/**
 * An image, or (until one is supplied) an honest empty frame that says what belongs there.
 */
export function Media({ image, ratio = "3 / 2", sizes = "100vw", priority, className, emptyLabel = "Image" }: MediaProps) {
  const hasImage = Boolean(image.src);

  return (
    <div className={["media", hasImage ? "" : "media--empty", className].filter(Boolean).join(" ")} style={{ aspectRatio: ratio }}>
      {hasImage ? (
        <Image
          src={image.src!}
          alt={plain(image.alt)}
          fill
          sizes={sizes}
          priority={priority}
          className="media__img"
        />
      ) : (
        <div className="media__empty" role="img" aria-label={`${emptyLabel}, to be provided`}>
          <span className="media__empty-tag">To be provided</span>
          <span className="media__empty-label">{emptyLabel}</span>
          {isPending(image.alt) ? null : <span className="media__empty-hint">{plain(image.alt)}</span>}
        </div>
      )}
    </div>
  );
}

export function MediaCaption({ caption, index }: { caption?: ContentImage["caption"]; index?: string }) {
  if (!caption) return null;
  return (
    <figcaption className="caption">
      {index ? <span className="caption__index">{index}</span> : null}
      <Text value={caption} />
    </figcaption>
  );
}
