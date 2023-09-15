/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-purple': '#D8B4F8',
        'eye-protect': '#202C33',
      },
    },
  },
  plugins: [],
}

