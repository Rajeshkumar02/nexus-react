const postcss = require('rollup-plugin-postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [
          tailwindcss({
            purge: ['./src/**/*.tsx'],
            content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
            theme: {
              extend: {
                colors: {
                  border: 'hsl(var(--border))',
                  input: 'hsl(var(--input))',
                  ring: 'hsl(var(--ring))',
                  background: 'hsl(var(--background))',
                  foreground: 'hsl(var(--foreground))',
                  primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                  },
                  secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                  },
                  destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                  },
                  muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                  },
                  accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                  },
                  popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                  },
                  card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                  },
                },
                keyframes: {
                  'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                  },
                  'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                  },
                },
                animation: {
                  'accordion-down': 'accordion-down 0.2s ease-out',
                  'accordion-up': 'accordion-up 0.2s ease-out',
                },
              },
            },
            variants: {
              extend: {},
            },
            plugins: [
              require('tailwindcss-animate'),
              require('@tailwindcss/typography'),
            ],
          }),
          autoprefixer(),
        ],
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
      })
    );

    return config;
  },
  transpiler: {
    babel: {
      presets: ['@babel/preset-env'],
    },
  },
};
