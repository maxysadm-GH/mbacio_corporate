module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#112d4e", // Deep navy
          50: "#f0f4f8", // Very light navy
          100: "#d9e2ec", // Light navy
          200: "#bcccdc", // Medium light navy
          300: "#9fb3c8", // Medium navy
          400: "#829ab1", // Medium dark navy
          500: "#627d98", // Dark navy
          600: "#486581", // Darker navy
          700: "#334e68", // Very dark navy
          800: "#243b53", // Deep navy
          900: "#112d4e", // Deepest navy
        },
        secondary: {
          DEFAULT: "#1a4578", // Lighter navy
          50: "#f1f5f9", // Very light secondary
          100: "#e2e8f0", // Light secondary
          200: "#cbd5e0", // Medium light secondary
          300: "#a0aec0", // Medium secondary
          400: "#718096", // Medium dark secondary
          500: "#4a5568", // Dark secondary
          600: "#2d3748", // Darker secondary
          700: "#1a202c", // Very dark secondary
          800: "#1a4578", // Deep secondary
          900: "#0f2a4a", // Deepest secondary
        },
        accent: {
          DEFAULT: "#facf39", // Vibrant yellow
          50: "#fffbeb", // Very light yellow
          100: "#fef3c7", // Light yellow
          200: "#fde68a", // Medium light yellow
          300: "#fcd34d", // Medium yellow
          400: "#fbbf24", // Medium dark yellow
          500: "#facf39", // Vibrant yellow
          600: "#d97706", // Dark yellow
          700: "#b45309", // Darker yellow
          800: "#92400e", // Very dark yellow
          900: "#78350f", // Deepest yellow
        },
        background: "#fafbfc", // Soft off-white
        surface: "#ffffff", // Pure white
        text: {
          primary: "#1a202c", // Near-black
          secondary: "#4a5568", // Medium gray
        },
        success: {
          DEFAULT: "#38a169", // Professional green
          50: "#f0fff4", // Very light green
          100: "#c6f6d5", // Light green
          200: "#9ae6b4", // Medium light green
          300: "#68d391", // Medium green
          400: "#48bb78", // Medium dark green
          500: "#38a169", // Professional green
          600: "#2f855a", // Dark green
          700: "#276749", // Darker green
          800: "#22543d", // Very dark green
          900: "#1c4532", // Deepest green
        },
        warning: {
          DEFAULT: "#d69e2e", // Amber
          50: "#fffbeb", // Very light amber
          100: "#fef3c7", // Light amber
          200: "#fde68a", // Medium light amber
          300: "#fcd34d", // Medium amber
          400: "#fbbf24", // Medium dark amber
          500: "#d69e2e", // Amber
          600: "#d97706", // Dark amber
          700: "#b45309", // Darker amber
          800: "#92400e", // Very dark amber
          900: "#78350f", // Deepest amber
        },
        error: {
          DEFAULT: "#e53e3e", // Clear red
          50: "#fed7d7", // Very light red
          100: "#feb2b2", // Light red
          200: "#fc8181", // Medium light red
          300: "#f56565", // Medium red
          400: "#e53e3e", // Clear red
          500: "#c53030", // Dark red
          600: "#9b2c2c", // Darker red
          700: "#822727", // Very dark red
          800: "#63171b", // Deep red
          900: "#4a0e0e", // Deepest red
        },
        border: "#e2e8f0", // Light gray border
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      borderRadius: {
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        'full': '9999px',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'large': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      scale: {
        '102': '1.02',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}