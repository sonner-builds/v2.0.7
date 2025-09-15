import * as esbuild from "esbuild";
import epeg from "esbuild-plugin-external-global";

await esbuild.build({
    entryPoints: ["src/index.js"],
    bundle: true,
    minify: true,
    sourcemap: true,
    outfile: "dist/sonner.esm.min.js",
    globalName: "Sonner",
    format: "esm",
    target: ["es6"],
    external: ["react", "react-dom"],
    plugins: [
        epeg.externalGlobalPlugin({
            "react": "window.React",
            "react-dom": "window.ReactDOM",
        }),
    ],
});
