
// //!! LOCAL FONT FALLBACKS:
// import localFont from "next/font/local";

// // Local font fallbacks
// export const afacadFluxLocalFallback = localFont({
//     src: './afacad-flux/afacad-flux.ttf',
//     display: "swap",
//     variable: "--font-afacad-flux-local",
// });

// export const jakartaSansLocalFallback = localFont({
//     src: './plus-jakarta-sans/pjs.ttf',
//     display: "swap",
//     variable: "--font-jakarta-sans-local",
// });

import { Plus_Jakarta_Sans, Afacad_Flux } from "next/font/google";

//! Google fonts with local fallbacks
export const afacadFlux = Afacad_Flux({
    subsets: ["latin"],
    style: "normal",
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: '--font-afacad-flux',
    // fallback: ['var(--font-afacad-flux-local)', 'system-ui', 'arial'],
});

export const jakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    style: "normal",
    weight: ["200", "300", "400", "500", "600", "700", "800"],
    variable: "--font-jakarta",
    // fallback: ['var(--font-jakarta-sans-local)', 'system-ui', 'arial'],
});


// export const inter = Inter({
//     subsets: ["latin"],
//     style: "normal",
//     weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//     variable: '--font-inter',
// });

// export const eduAUVICWANTHand = Edu_AU_VIC_WA_NT_Hand({
//     subsets: ["latin"],
//     style: "normal",
//     weight: "400",
//     variable: '--font-edu-au-vic-wa-nt-hand',
// });

// export const monaSans = localFont({
//     src: './Mona-Sans.var.woff2',
//     variable: "--font-mona-sans",
// });

// //!! LOCAL FONT:
// import localFont from "next/font/local";

// export const eduHand = localFont({
//     src: './edu-sa-hand/edu-sa-hand-variable.ttf',
//     variable: "--font-edu-hand",
// });
