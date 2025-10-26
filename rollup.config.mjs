import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import packageJson from './package.json' with { type: 'json' };

export default [
    {
        input: 'src/index.ts',
        external: ['react'],
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
            }, 
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
            }
        ],
        plugins: [
            typescript({
                tsconfig: './tsconfig.json',
                exclude: ['**/*.test.ts', '**/*.test.tsx', '**/*.stories.ts'], 
            }),
            commonjs(),
            resolve(),
            postcss({
                extensions: ['.css', '.scss'], use: ['sass'], inject: true, extract: false,
            }), 
        ]
    },
    {
        input: 'src/index.ts',
        external: ['react'],
        output: [
            {
                file: 'dist/index.d.ts',
                format: 'esm',
                sourcemap: true,
            }
        ],
        plugins: [
            dts({
                tsconfig: './tsconfig.json',
            }),
        ],
    }
]