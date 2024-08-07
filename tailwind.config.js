import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';
import daisyui from 'daisyui';
import themes from 'daisyui/src/theming/themes';
import typography from '@tailwindcss/typography';
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts,md}'],

	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '3rem',
				xl: '4rem'
			},
			// default breakpoints but with 40px removed
			screens: {
				sm: defaultTheme.screens['xs'],
				md: defaultTheme.screens['sm'],
				lg: defaultTheme.screens['md'],
				xl: defaultTheme.screens['lg'],
				'2xl': defaultTheme.screens['xl']
			}
		},
		extend: {
			aspectRatio: {
				'4/3': '4 / 3',
				'3/2': '3 / 2'
			},
			animation: {
				'spin-slow': 'spin 48s linear infinite',
				'move-y': 'move-y 8s linear infinite',
				'move-x': 'move-x 8s linear infinite',
				wiggle: 'wiggle 300ms linear 5',
				'wiggle-zoom': 'wiggle-zoom 1.5s ease-in-out 1'
			},
			keyframes: {
				'move-y': {
					'0%, 100%': { transform: 'translateY(-0.75rem)' },
					'50%': { transform: 'translateY(0.75rem)' }
				},
				'move-x': {
					'0%, 100%': { transform: 'translateX(-0.75rem)' },
					'50%': { transform: 'translateX(0.75rem)' }
				},
				wiggle: {
					'25%': { transform: 'rotate(3deg)' },
					'75%': { transform: 'rotate(-3deg)' }
				},
				'wiggle-zoom': {
					'0%, 100%': { transform: 'scale(100%)' },
					'10%, 90%': { transform: 'scale(110%)' }
				}
			},
			borderRadius: {
				sm: defaultTheme.borderRadius['md'],
				DEFAULT: defaultTheme.borderRadius['lg'],
				md: defaultTheme.borderRadius['xl'],
				lg: defaultTheme.borderRadius['2xl'],
				xl: defaultTheme.borderRadius['3xl'],
				'2xl': '2rem',
				'3xl': '2.5rem'
			}
		},

		fontFamily: {
			sans: ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans],
			serif: ['"Source Serif Pro"', ...defaultTheme.fontFamily.serif],
			mono: ['"Source Code Pro"', ...defaultTheme.fontFamily.mono]
		}
	},

	daisyui: {
		themes: [
			{
				light: {
					...themes['light'],
					primary: colors.violet[700],
					secondary: colors.slate[300],
					accent: colors.slate[800],

					'base-100': colors.slate[50],
					'base-200': colors.slate[100],
					'base-300': colors.slate[200],
					'base-content': colors.slate[800],

					'--rounded-btn': '1rem',
					'--border-btn': '0.25rem',
					'--btn-text-case': 'none'
				},
				dark: {
					...themes['dark'],
					primary: colors.violet[700],
					secondary: colors.slate[300],
					accent: colors.slate[800],

					'base-100': colors.slate[800],
					'base-200': colors.slate[950],
					'base-300': colors.slate[900],
					'base-content': colors.slate[200],

					'--rounded-btn': '1rem',
					'--border-btn': '0.25rem',
					'--btn-text-case': 'none'
				}
			},
			'cupcake'
		]
	},

	plugins: [
		typography,
		daisyui,
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'animation-delay': (value) => {
						return {
							'animation-delay': value
						};
					}
				},
				{
					values: theme('transitionDelay')
				}
			);
		})
	]
};
