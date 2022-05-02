module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  safelist: [
    'bg-gray-100', 'bg-green-200', 'bg-white',
    'border-gray-100', 'border-gray-300', 'border-green-300',
    'border-l-4', 'border-r-2', 'border-white',
    'flex', 'font-bold', 'font-extrabold',
    'h-screen', 'inline', 'items-center',
    'list-decimal', 'list-disc', 'list-outside',
    'mb-4', 'mb-6', 'ml-7',
    'ml-8', 'mt-12', 'mt-14',
    'mt-16', 'mx-auto', 'my-4',
    'my-5', 'my-8', 'overflow-y-auto',
    'p-4', 'pl-14', 'pl-4',
    'py-2.5', 'right-20', 'rounded-lg',
    'self-start', 'sticky', 'text-2xl',
    'text-3xl', 'text-black', 'text-blue-500',
    'text-cyan', 'text-gray-300', 'text-left',
    'text-lg', 'text-raisin', 'text-xl',
    'top-16', 'underline', 'w-1/5'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundSize: {
      "30": "50%",
    },

    backgroundPosition: {
      "left-center": "2% 60%",
    },

    extend: {
      backgroundImage: {
        'logo': "url('./images/sentinel_logo/SVGs/Sentinel_graphic_grayscale.svg')"
      },
      colors: {
        "raisin": "#20232b",
        "cyan": "#1ba8e0",
        "yellowgreen": "#92c83e",
        "slate": "#f2f2f2",
        "fulvous": "#E07F00",
        "glaucous": "#6981A8",
        "dark-blue": "#3c4d66",
        "selectiveyellow": "#F5B200",
        "pantone": "#FFE400"
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      borderColor: ['active'],
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
