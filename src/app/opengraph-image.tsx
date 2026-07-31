import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0c",
          color: "#f5f4f2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 22, color: "#ff4d2e", letterSpacing: 4 }}>
          PERFORMANCE MARKETING STRATEGIST
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 600, marginTop: 24, lineHeight: 1.05 }}>
          {site.name}
        </div>
        <div style={{ display: "flex", fontSize: 40, color: "#ff4d2e", marginTop: 8 }}>
          {site.brand}
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#9a9aa2", marginTop: 32, maxWidth: 900 }}>
          ₹6Cr+ tracked revenue &middot; 20x peak ROAS &middot; India &amp; UAE
        </div>
      </div>
    ),
    { ...size }
  );
}
