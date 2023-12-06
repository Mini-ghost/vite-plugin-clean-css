import CleanCSS from 'clean-css'
import type { Plugin } from 'vite'
import type { OptionsOutput } from 'clean-css'

function CleanCssPlugin(options?: OptionsOutput): Plugin {
  return {
    name: 'vite-plugin-clean-css',
    enforce: 'post',
    apply: 'build',
    generateBundle(_, bundle) {
      const cleanCSS = new CleanCSS(options)

      for (const key in bundle) {
        const chunk = bundle[key]
        if (chunk.type === 'asset' && chunk.fileName.endsWith('.css'))
          chunk.source = cleanCSS.minify(chunk.source as string).styles
      }
    },
  }
}

export default CleanCssPlugin
