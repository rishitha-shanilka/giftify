// Decorative background for the product detail page — scattered hearts,
// ribbons and gift boxes in the site's espresso/cocoa/coral palette.
// Pure inline SVG, no external image, sits behind the product content
// and covers whatever flat background color the page layout sets.

type Shape = {
    type: "heart" | "ribbon" | "box";
    top: string;
    left: string;
    size: number;
    rotate: number;
    opacity: number;
    color: string;
};

const shapes: Shape[] = [
    { type: "box", top: "6%", left: "6%", size: 46, rotate: -10, opacity: 0.14, color: "#8C6A52" },
    { type: "heart", top: "10%", left: "24%", size: 22, rotate: 12, opacity: 0.18, color: "#FEA38E" },
    { type: "ribbon", top: "4%", left: "82%", size: 60, rotate: 8, opacity: 0.16, color: "#5C3310" },
    { type: "heart", top: "20%", left: "92%", size: 18, rotate: -14, opacity: 0.16, color: "#C9832B" },
    { type: "box", top: "34%", left: "90%", size: 36, rotate: 14, opacity: 0.14, color: "#FEA38E" },
    { type: "heart", top: "46%", left: "4%", size: 20, rotate: 10, opacity: 0.16, color: "#8C6A52" },
    { type: "ribbon", top: "58%", left: "88%", size: 50, rotate: -8, opacity: 0.14, color: "#C9832B" },
    { type: "box", top: "70%", left: "8%", size: 34, rotate: -12, opacity: 0.13, color: "#5C3310" },
    { type: "heart", top: "80%", left: "94%", size: 20, rotate: 8, opacity: 0.16, color: "#FEA38E" },
    { type: "box", top: "88%", left: "20%", size: 30, rotate: 10, opacity: 0.13, color: "#8C6A52" },
];

function Heart({ color }: { color: string }) {
    return (
        <svg viewBox="0 0 24 24" width="100%" height="100%" fill={color}>
            <path d="M12 20.5S3.5 15.3 3.5 9.2A4.7 4.7 0 0 1 12 6.8a4.7 4.7 0 0 1 8.5 2.4c0 6.1-8.5 11.3-8.5 11.3Z" />
        </svg>
    );
}

function Ribbon({ color }: { color: string }) {
    return (
        <svg viewBox="0 0 40 28" width="100%" height="100%" fill="none">
            <path
                d="M20 8c-6-9-18-6-16 1 1.5 5 11 3 16-1Zm0 0c6-9 18-6 16 1-1.5 5-11 3-16-1Z"
                fill={color}
            />
            <rect x="17" y="6" width="6" height="6" rx="1.5" fill={color} />
        </svg>
    );
}

function Box({ color }: { color: string }) {
    return (
        <svg viewBox="0 0 40 40" width="100%" height="100%">
            <rect x="6" y="16" width="28" height="20" rx="2" fill={color} />
            <rect x="3" y="10" width="34" height="8" rx="2" fill={color} opacity="0.85" />
            <rect x="17" y="10" width="6" height="26" fill="#fff" opacity="0.45" />
        </svg>
    );
}

export default function ProductBackground() {
    return (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        "linear-gradient(160deg, #fffaf3 0%, #fdefd6ff 15%, #5c3310 100%)",
                }}
            />
            {shapes.map((s, i) => (
                <div
                    key={i}
                    className="absolute"
                    style={{
                        top: s.top,
                        left: s.left,
                        width: s.size,
                        height: s.size,
                        opacity: s.opacity,
                        transform: `rotate(${s.rotate}deg)`,
                    }}
                >
                    {s.type === "heart" && <Heart color={s.color} />}
                    {s.type === "ribbon" && <Ribbon color={s.color} />}
                    {s.type === "box" && <Box color={s.color} />}
                </div>
            ))}
        </div>
    );
}