/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8800ff',
        secondary: '#dc0000',
        accent: '#4b8f00',
        neutral: '#201c18',
        base100: '#ffffff',
        base200: '#dedbde',
        base300: '#bebbbe',
        baseContent: '#161616', // Ensure this matches the desired color
        info: '#0070ff',
        success: '#82e457',
        warning: '#d5a600',
        error: '#ff4559',
      },
      textColor: {
        DEFAULT: '#161616', // This ensures the default text color is applied globally
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#8800ff',
          'primary-content': '#e4d9ff',
          secondary: '#dc0000',
          'secondary-content': '#fc6d6d',
          accent: '#4b8f00',
          'accent-content': '#027070',
          neutral: '#201c18',
          'neutral-content': '#dcdccb',
          'base-100': '#ffffff',
          'base-200': '#dedbde',
          'base-300': '#bebbbe',
          'base-content': '#161616',
          info: '#0070ff',
          'info-content': '#000516',
          success: '#82e457',
          'success-content': '#061203',
          warning: '#d5a600',
          'warning-content': '#1f0a00',
          error: '#ff4559',
          'error-content': '#160203',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
