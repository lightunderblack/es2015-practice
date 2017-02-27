module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        babel: {
            options: {
                sourceMap: true,
                presets: ["es2015"]
            },
            build: {
                files: [{
                    expand: true,
                    cwd: "assets/js/",
                    src: "**/*.js",
                    dest: "dist/js/"
                }]
            }
        },
        watch: {
            files: ["assets/js/**/*.js"],
            tasks: ["babel:build"]
        }
    });

    grunt.loadNpmTasks("grunt-babel");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("default", ["babel:build"]);

};