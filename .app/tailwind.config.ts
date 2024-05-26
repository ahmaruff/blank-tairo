import { withShurikenUI } from '@shuriken-ui/tailwind'

/**
 * This is the Tailwind config file for the demo.
 * It extends the default config from @shuriken-ui/tailwind
 *
 * You can add/override your own customizations here.
 */
export default withShurikenUI({
  content: [
    `~/components/**/*{vue,js,ts}`,
    `~/layouts/**/*.vue`,
    `~/pages/**/*.vue`,
    `~/composables/**/*.{js,ts}`,
    `~/plugins/**/*.{js,ts}`,
    `~/utils/**/*.{js,ts}`,
    `~/App.{js,ts,vue}`,
    `~/app.{js,ts,vue}`,
    `~/Error.{js,ts,vue}`,
    `~/error.{js,ts,vue}`,
    `~/app.config.{js,ts}`,
  ],
  theme: {
    // Custom fonts (defaults values are commented out)
    // fontFamily: {
    //   sans: ['Roboto Flex', 'sans-serif'],
    //   heading: ['Inter', 'sans-serif'],
    //   alt: ['Karla', 'sans-serif'],
    //   mono: [
    //     'ui-monospace',
    //     'SFMono-Regular',
    //     'Menlo',
    //     'Monaco',
    //     'Consolas',
    //     '"Liberation Mono"',
    //     '"Courier New"',
    //     'monospace',
    //   ],
    // },
    extend: {
      // Custom colors
      colors: {
        // primary: colors.indigo,
        // muted: colors.slate,
        // info: colors.sky,
        // success: colors.teal,
        // warning: colors.amber,
        // danger: colors.rose,
      },
    },
  },
  plugins: [],
})
