This project demonstrates a possible bug in the project `gulp-typescript` (<https://github.com/ivogabe/gulp-typescript>) when using both option `options.declaration: true` and `options.allowJs: true` together.

#Issue
Whe `options.allowJs: true` is provided, both TS and JS files get transpiled. All is great.

When both `options.allowJs: true` and `options.declaration: true` are set, only the typescript files get transpiled and not the javascript files.

#Steps to reproduce
1. Pull this project with `git clone ` 
2. Pull dependencies with `npm install`
3. Start by building project with `options.declaration: false` by typing `gulp without-declarations`
4. Now verify that you have a directory named `release/js` which contains both `testJS.js` and `testTS.js`. This is as expected.
5. Now remove your release dir with `rm -rf release`
6. This time build project with `options.declaration: true` by typing `gulp with-declarations`
7. Look in `releases/js` and find that only `testTS.js` exists there and not the (originally) javascript file `testJS.js`.



