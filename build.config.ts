import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index.ts',
    // {
    //   input: 'src/plugins/',
    //   outDir: 'dist/plugins/',
    //   format: 'esm',
    // },
  ],
  sourcemap: true,
  declaration: true,
  rollup: {
    emitCJS: false,
  },
})
