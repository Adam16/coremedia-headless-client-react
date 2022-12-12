import styled, { createGlobalStyle } from 'styled-components';

// see: https://nextjs.org/docs/advanced-features/compiler#styled-components
// work in progress!

export const StyledAlert = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  flex-grow: 1;
  width: 100%;

  img {
    height: 15vw;
  }

  h1 {
    margin-top: 0;
    font-size: var(--font-size-heading-1);
  }

  p {
    max-height: 25vh;
    overflow: auto;
  }
`;

export const GlobalStyle = createGlobalStyle`
  :root {
    /* FONTS */
    --font-family-headline: BebasNeue, Times New Roman, Times, serif;
    --font-family-text: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    --font-family-studio: 'Roboto', 'Segoe UI', 'Trebuchet MS', 'Lucida Grande', 'Helvetica', sans-serif;
    --font-size-heading-1: 60px;
    --font-size-heading-2: 30px;
    --font-size-heading-3: 20px;
    --font-size-text: 16px;
    --font-size-text-small: 14px;
    --line-height: 1.2rem;
    /* COLORS */
    --color-background-light: #fff;
    --color-background-dark: #1a1a1a;
    --color-background-grey: #333;
    --color-background-light-grey: #efefed;
    --color-menu-shadow: hsla(0, 0%, 0%, 0.5);
    --color-background-image: #ccc;
    --color-green-highlight: #6fc3b8;
    --color-green-highlight-hover: var(--color-background-dark);
    --color-green-highlight-active: var(--color-background-grey);
    --color-font-cta-hover: var(--color-background-light);
    /* SIZES */
    --padding-small: 12px;
    --padding-medium: 24px;
    --padding-large: 48px;
    --screen-size-max: 1140px;
  }

  html,
  body,
  .cm-app {
    height: 100%;
  }

  .cm-app > ${StyledAlert} {
    position: absolute;
    bottom: 50%;
    right: 50%;
    transform: translate(50%, 50%);
    box-sizing: border-box;
    padding: var(--padding-large);

    @media screen and (min-width: 768px) {
      background: var(--color-background-image);
      width: 700px;
      border-radius: 12px;
    }
  }


  body {
    font-family: var(--font-family-text);
    background-color: var(--color-background-light);
    margin: 0;

    &[data-is-preview] {
      background-color: transparent;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-family-headline);
    font-weight: normal;
  }

  a {
    color: var(--color-background-dark);
  }
`;
