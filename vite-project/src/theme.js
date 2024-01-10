/*

  Light mode colours

  text: --dark-blue-text,
  background: --v-light-blue,
  primary: --dark-grey-text,
  cardBg/ inverseText:  --grey-blue-card-bg
  ---------------------------------------
  Dark mode colours

  text: --blue-text
  background: --very-dark-blue-bg
  primary: --other-dark-blue
  cardBg: --dark-grey-card-bg
*/
const theme = {
  initialColorMode: 'light',
  colors: {
    text: 'hsl(230, 17%, 14%)',
    background: 'hsl(225, 100%, 98%)',
    primary: 'hsl(227, 47%, 96%)',
    cardBg: 'hsl(228, 12%, 44%)',
    modes: {
      dark: {
        text: 'hsl(228, 34%, 66%)',
        background: 'hsl(230, 17%, 14%)',
        primary: 'hsl(232, 19%, 15%)',
        cardBg: 'hsl(228, 28%, 20%)',
      },
    },
  },
};

export default theme;
