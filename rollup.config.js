import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

export default {
    input: 'src/index.js',
    output: {
        file: 'bundle.js',
        format: "iife",
        name: "myBundle",
        globals: {
            lodash: '_'
        }
    },
    plugins: [
        terser(),
        babel({babelHelpers: 'bundled'}),
        commonjs(),
        resolve({moduleDirectories: ['node_modules']}),
        // html({
        //     fileName: 'index.html',
        //     title: 'Rollup Test'
        // })
    ],
    // external: ['lodash']
}