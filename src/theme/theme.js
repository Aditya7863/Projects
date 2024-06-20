import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 599px) {//min-width:320px
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (min-width: 600px) and (max-width: 1199px) {
      ${props}
    }
  `;
};


export const mixins = {
    flexCenter: css`
      display: flex;
      justify-content: center;
      align-items: center;
    `,
  };

export const theme = {
    primaryColor: 'hsl(246, 80%, 60%)',
    // colors: {
    //     work: 'hsl(15, 100%, 70%)',
    //     play: 'hsl(195, 74%, 62%)',
    //     study: 'hsl(348, 100%, 68%)',
    //     exercise: 'hsl(145, 58%, 55%)',
    //     social: 'hsl(264, 64%, 52%)',
    //     selfCare: 'hsl(43, 84%, 65%)',
    // },
    neutrals: {
        veryDarkBlue: 'hsl(226, 43%, 10%)',
        darkBlue: 'hsl(235, 46%, 20%)',
        desaturatedBlue: 'hsl(235, 45%, 61%)',
        paleBlue: 'hsl(236, 100%, 87%)',
    },
    typography: {
        fontFamily: 'Rubik, sans-serif',
        fontSizeBody: '18px',
        light: 300,
        regular: 400,
        medium: 500,
    },
};
