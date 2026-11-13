import { ImageResponse } from "next/og";

export const alt = "Elham, Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Loads a Google font subset as TTF for the OG renderer. Falls back silently if unreachable. */
async function loadFont(family: string, weight: number, text: string): Promise<ArrayBuffer | null> {
  try {
    const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}&text=${encodeURIComponent(text)}`;
    const css = await (await fetch(url)).text();
    const src = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
    if (!src) return null;
    const res = await fetch(src[1]);
    return res.ok ? await res.arrayBuffer() : null;
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  // Latin only: the OG renderer (Satori) cannot shape Arabic font features.
  const bodoni = await loadFont("Bodoni Moda", 400, "ElhamPortfolio");
  const fonts = bodoni ? [{ name: "Bodoni Moda", data: bodoni, weight: 400 as const, style: "normal" as const }] : [];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 96px",
          background: "#FBF7F2",
          color: "#5A1F33",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 22, letterSpacing: 6, color: "#8C4E57", textTransform: "uppercase" }}>Portfolio</div>
          <div style={{ fontSize: 184, lineHeight: 1, fontFamily: "Bodoni Moda", marginTop: 12 }}>Elham</div>
          <div style={{ fontSize: 26, letterSpacing: 2, color: "#76655C", marginTop: 20 }}>From a thought to an impression</div>
        </div>
        <div
          style={{
            position: "relative",
            width: 300,
            height: 450,
            display: "flex",
            border: "1px solid #D6C0A6",
            borderRadius: "150px 150px 0 0",
            background: "#F5DFE0",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -12,
              left: 138,
              width: 24,
              height: 24,
              borderRadius: 12,
              background: "#C3949A",
            }}
          />
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined },
  );
}
