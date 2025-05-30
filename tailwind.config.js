/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        'border-move': 'borderMove 4s linear infinite',
      },
      keyframes: {
        borderMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      colors: {
        bleu_fonce: "#28337e",
        bleu_fonce2: "#3000f0",
        bleu_milieu: "#4269b1",
        bleu_clair: "#acddf6",
        bleu_clair2: "#8cd0f2",
        white: "#ffffff",
        black: "#202020",
      },
      fontFamily: {
        titre: ["Orbitron", "sans-serif"],
        texte: ["IBM Plex Mono", "sans-serif"],
        logo: ["nasalization"],
      },
      fontSize: {
        xs: ["0.85rem"],
        s: ["1rem"],
        m: ["1.1rem"],
        l: ["1.2rem"],
        xl: ["1.4rem"],
        xxl: ["2.1rem"],
      },
      backgroundImage: {
        fontClair: `linear-gradient(
          52deg,
          rgba(163, 163, 163, 0.09) 0%,
          rgba(163, 163, 163, 0.09) 33.3%,
          rgba(100, 100, 100, 0.09) 33.3%,
          rgba(100, 100, 100, 0.09) 66.6%,
          rgba(71, 71, 71, 0.09) 66.6%,
          rgba(71, 71, 71, 0.09) 99%
        ),
        linear-gradient(
          258deg,
          rgba(193, 193, 193, 0.06) 0%,
          rgba(193, 193, 193, 0.06) 33.3%,
          rgba(92, 144, 242, 0.06) 33.3%,
          rgba(92, 144, 242, 0.06) 66.6%,
          rgba(92, 92, 92, 0.06) 66.6%,
          rgba(92, 92, 92, 0.06) 99%
        ),
        linear-gradient(
          129deg,
          rgba(45, 45, 45, 0.03) 0%,
          rgba(45, 45, 45, 0.03) 33.3%,
          rgba(103, 153, 250, 0.03) 33.3%,
          rgba(103, 153, 250, 0.03) 66.6%,
          rgba(173, 173, 173, 0.03) 66.6%,
          rgba(173, 173, 173, 0.03) 99%
        ),
        linear-gradient(
          280deg,
          rgba(24, 18, 18, 0.06) 0%,
          rgba(24, 18, 18, 0.06) 33.3%,
          rgba(81, 81, 81, 0.06) 33.3%,
          rgba(81, 81, 81, 0.06) 66.6%,
          rgba(125, 125, 125, 0.06) 66.6%,
          rgba(125, 125, 125, 0.06) 99%
        ),
        linear-gradient(
          85deg,
          rgba(65, 173, 254, 0.04) 0%,
          rgba(65, 173, 254, 0.04) 33.3%,
          rgba(41, 99, 246, 0.04) 33.3%,
          rgba(41, 99, 246, 0.04) 66.6%,
          rgba(39, 39, 39, 0.04) 66.6%,
          rgba(39, 39, 39, 0.04) 99%
        ),
        linear-gradient(
          128deg,
          rgba(88, 86, 86, 0.06) 0%,
          rgba(88, 86, 86, 0.06) 33.3%,
          rgba(0, 0, 0, 0.06) 33.3%,
          rgba(0, 0, 0, 0.06) 66.6%,
          rgba(72, 171, 248, 0.06) 66.6%,
          rgba(72, 171, 248, 0.06) 99.89999999999999%
        ),
        linear-gradient(
          323deg,
          rgba(40, 40, 40, 0.07) 0%,
          rgba(40, 40, 40, 0.07) 33.3%,
          rgba(137, 134, 134, 0.07) 33.3%,
          rgba(137, 134, 134, 0.07) 66.6%,
          rgba(190, 190, 190, 0.07) 66.6%,
          rgba(190, 190, 190, 0.07) 99.89999999999999%
        ),
        linear-gradient(
          61deg,
          rgba(230, 230, 230, 0) 0%,
          rgba(230, 230, 230, 0) 33.3%,
          rgba(241, 241, 241, 0) 33.3%,
          rgba(241, 241, 241, 0) 66.6%,
          rgba(55, 55, 55, 0) 66.6%,
          rgba(55, 55, 55, 0) 99%
        ),
        linear-gradient(0deg, rgb(33, 97, 211), rgb(115, 194, 251))`,

        fontSombre: `linear-gradient(
          52deg,
          rgba(163, 163, 163, 0.09) 0%,
          rgba(163, 163, 163, 0.09) 33.3%,
          rgba(100, 100, 100, 0.09) 33.3%,
          rgba(100, 100, 100, 0.09) 66.6%,
          rgba(71, 71, 71, 0.09) 66.6%,
          rgba(71, 71, 71, 0.09) 99%
        ),
        linear-gradient(
          258deg,
          rgba(193, 193, 193, 0.06) 0%,
          rgba(193, 193, 193, 0.06) 33.3%,
          rgba(169, 169, 169, 0.06) 33.3%,
          rgba(169, 169, 169, 0.06) 66.6%,
          rgba(92, 92, 92, 0.06) 66.6%,
          rgba(92, 92, 92, 0.06) 99%
        ),
        linear-gradient(
          129deg,
          rgba(45, 45, 45, 0.03) 0%,
          rgba(45, 45, 45, 0.03) 33.3%,
          rgba(223, 223, 223, 0.03) 33.3%,
          rgba(223, 223, 223, 0.03) 66.6%,
          rgba(173, 173, 173, 0.03) 66.6%,
          rgba(173, 173, 173, 0.03) 99%
        ),
        linear-gradient(
          280deg,
          rgba(24, 18, 18, 0.06) 0%,
          rgba(24, 18, 18, 0.06) 33.3%,
          rgba(81, 81, 81, 0.06) 33.3%,
          rgba(81, 81, 81, 0.06) 66.6%,
          rgba(125, 125, 125, 0.06) 66.6%,
          rgba(125, 125, 125, 0.06) 99%
        ),
        linear-gradient(
          85deg,
          rgba(7, 6, 6, 0.04) 0%,
          rgba(7, 6, 6, 0.04) 33.3%,
          rgba(127, 120, 120, 0.04) 33.3%,
          rgba(127, 120, 120, 0.04) 66.6%,
          rgba(39, 39, 39, 0.04) 66.6%,
          rgba(39, 39, 39, 0.04) 99%
        ),
        linear-gradient(
          128deg,
          rgba(88, 86, 86, 0.06) 0%,
          rgba(88, 86, 86, 0.06) 33.3%,
          rgba(0, 0, 0, 0.06) 33.3%,
          rgba(0, 0, 0, 0.06) 66.6%,
          rgba(140, 140, 140, 0.06) 66.6%,
          rgba(140, 140, 140, 0.06) 99.89999999999999%
        ),
        linear-gradient(
          323deg,
          rgba(40, 40, 40, 0.07) 0%,
          rgba(40, 40, 40, 0.07) 33.3%,
          rgba(137, 134, 134, 0.07) 33.3%,
          rgba(137, 134, 134, 0.07) 66.6%,
          rgba(190, 190, 190, 0.07) 66.6%,
          rgba(190, 190, 190, 0.07) 99.89999999999999%
        ),
        linear-gradient(61deg, rgba(230, 230, 230, 0) 0%, rgba(230, 230, 230, 0) 33.3%, rgba(241, 241, 241, 0) 33.3%, rgba(241, 241, 241, 0) 66.6%, rgba(55, 55, 55, 0) 66.6%, rgba(55, 55, 55, 0) 99%),
        linear-gradient(0deg, rgb(0, 0, 0), rgb(2, 3, 3))`,
      },
    },
  },
  plugins: [require("tailwind-variants")],
};
