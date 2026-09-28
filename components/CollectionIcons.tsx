// Small isometric-style "3D" icons for the Curated Collections cards.
// All four share the same isometric box geometry (top diamond + two side
// faces) so they sit consistently; only the top decoration + colours change.
// Pure inline SVG — no external image files, no licensing to worry about.

function Shadow() {
    return <ellipse cx="60" cy="112" rx="32" ry="7" fill="black" opacity="0.22" />;
}

// Shared box faces. topFill/leftFill/rightFill are gradient ids already
// defined by the caller.
function Box({
    topFill,
    leftFill,
    rightFill,
}: {
    topFill: string;
    leftFill: string;
    rightFill: string;
}) {
    return (
        <>
            {/* left face */}
            <path d="M20 44 60 66 60 104 20 82Z" fill={leftFill} />
            {/* right face */}
            <path d="M60 66 100 44 100 82 60 104Z" fill={rightFill} />
            {/* top face (diamond) */}
            <path d="M60 20 100 44 60 66 20 44Z" fill={topFill} />
        </>
    );
}

export function LuxuryIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
            <defs>
                <linearGradient id="lux-top" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FBEBC9" />
                    <stop offset="100%" stopColor="#E3B559" />
                </linearGradient>
                <linearGradient id="lux-left" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C9932F" />
                    <stop offset="100%" stopColor="#9C7222" />
                </linearGradient>
                <linearGradient id="lux-right" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F6D9A8" />
                    <stop offset="100%" stopColor="#D3A544" />
                </linearGradient>
            </defs>
            <Shadow />
            <Box topFill="url(#lux-top)" leftFill="url(#lux-left)" rightFill="url(#lux-right)" />
            {/* ribbon across the lid */}
            <path d="M20 44 60 66 100 44" fill="none" stroke="#7A2036" strokeWidth="6" strokeLinejoin="round" />
            <path d="M60 20 60 66" stroke="#7A2036" strokeWidth="6" />
            {/* symmetric bow */}
            <g transform="translate(60,20)">
                <path d="M0 0C-4-10-18-12-20-4-21 1-14 4-8 2Z" fill="#8B2942" />
                <path d="M0 0C4-10 18-12 20-4 21 1 14 4 8 2Z" fill="#8B2942" />
                <circle r="4" fill="#5C1B2C" />
            </g>
        </svg>
    );
}

export function MinimalIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
            <defs>
                <linearGradient id="min-top" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#F2F2F2" />
                    <stop offset="100%" stopColor="#C4C4C4" />
                </linearGradient>
                <linearGradient id="min-left" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3A3A3A" />
                    <stop offset="100%" stopColor="#1A1A1A" />
                </linearGradient>
                <linearGradient id="min-right" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#5A5A5A" />
                    <stop offset="100%" stopColor="#2E2E2E" />
                </linearGradient>
            </defs>
            <Shadow />
            <Box topFill="url(#min-top)" leftFill="url(#min-left)" rightFill="url(#min-right)" />
            {/* single thin line = the only "decoration", keeps it minimal */}
            <path d="M60 20 60 66" stroke="#8a8a8a" strokeWidth="2" />
        </svg>
    );
}

export function SelfCareIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
            <defs>
                <linearGradient id="sc-jar" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FBD7D2" />
                    <stop offset="100%" stopColor="#E39B95" />
                </linearGradient>
                <linearGradient id="sc-wax" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FFF6E9" />
                    <stop offset="100%" stopColor="#F3DDB5" />
                </linearGradient>
            </defs>
            <Shadow />
            <rect x="36" y="54" width="48" height="44" rx="6" fill="url(#sc-jar)" />
            <ellipse cx="60" cy="54" rx="24" ry="8" fill="url(#sc-wax)" />
            <ellipse cx="60" cy="52" rx="17" ry="5.5" fill="#FDEFD8" />
            <rect x="58.5" y="34" width="3" height="16" rx="1.5" fill="#8A5A3B" />
            <path d="M60 22c4 5 6 9 4 13-2-1-5-2-4-6-3 3-3 7 0 10-5 0-8-4-8-8 0-6 4-8 8-9Z" fill="#F0A24D" />
            <path d="M42 62c6-3 30-3 36 0" stroke="#C97B76" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.55" />
            <path d="M42 74c6-3 30-3 36 0" stroke="#C97B76" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.4" />
        </svg>
    );
}

export function HomeIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
            <defs>
                <linearGradient id="hm-wall" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#D9BD93" />
                    <stop offset="100%" stopColor="#A8814F" />
                </linearGradient>
                <linearGradient id="hm-roof" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#8B5E34" />
                    <stop offset="100%" stopColor="#5E3B1E" />
                </linearGradient>
                <linearGradient id="hm-leaf" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#9CB57A" />
                    <stop offset="100%" stopColor="#6C8C4E" />
                </linearGradient>
            </defs>
            <Shadow />
            <path d="M32 64 60 80 88 64 88 100 60 116 32 100Z" fill="url(#hm-wall)" />
            <path d="M32 64 60 80 60 116 32 100Z" fill="#8A6A3E" opacity="0.55" />
            <path d="M22 60 60 38 98 60 60 82Z" fill="url(#hm-roof)" />
            <rect x="52" y="88" width="16" height="22" rx="2" fill="#5E3B1E" />
            <g transform="translate(86,46)">
                <rect x="-6" y="10" width="12" height="16" rx="3" fill="#C9932F" />
                <path d="M0 10c-10-4-14-16-6-22 8 4 10 14 6 22Z" fill="url(#hm-leaf)" />
                <path d="M0 10c10-2 16-12 10-20-8 2-12 12-10 20Z" fill="url(#hm-leaf)" />
            </g>
        </svg>
    );
}