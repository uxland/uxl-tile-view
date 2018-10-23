const gulp = require("gulp");
const run = require("gulp-run");
const moduleName = "@uxland/uxl-tile-view";
const path = require("path");
const nodeModules = "node_modules";

gulp.task("generate-d-ts", (done) => {
    require("dts-generator").default({
        name: moduleName,
        out: "./index.d.ts",
        project: "./gulp/tsconfig-dist.json",
        baseDir: "./src",
        resolveModuleId: params => {
            console.log(params.currentModuleId);
            return params.currentModuleId === "index" ? moduleName : `${moduleName}/${params.currentModuleId}`;
        }
    }).then(done);
});
gulp.task("dist", () => run("npm run dist").exec());