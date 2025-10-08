// Ambient declarations for importing CSS files.
// Keeps styling-related types isolated from auth-related `types.d.ts`.

// CSS Modules (e.g. import styles from "./x.module.css")
declare module "*.module.css" {
    const classes: { [className: string]: string };
    export default classes;
}

// Plain/global CSS side‑effect imports (e.g. import "./globals.css")
declare module "*.css" { }

// SCSS side‑effect imports (e.g. import "./styles.scss")
declare module "*.scss" { }
