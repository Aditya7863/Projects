# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
<!-- - [Author](#author) -->


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

This section is for noting down new things I learnt so feel free to skip this part.
Use of useContext() hook.

App.jsx

```jsx
export const DataTimeframeContext = createContext();

function App() {
  const [tab, setTab] = useState("daily");

  return (
    <ThemeProvider theme={theme}>
      <DataTimeframeContext.Provider value={{ tab, setTab }}>
        <Container>
          <Wrapper>
            <Sidebar />
            {data.map((item) => (
              <Card key={item.id} props={item} />
            ))}
          </Wrapper>
        </Container>
      </DataTimeframeContext.Provider>
    </ThemeProvider>
  );
}
```

Sidebar.jsx

```jsx
const Sidebar = () => {
  const { tab, setTab } = useContext(DataTimeframeContext);
  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  return (
    <Wrapper>
      <Profile>
        <ProfileImage src="./assets/image-jeremy.png" />
        <ProfileInfo>
          <Heading>Report for</Heading>
          <Name>Jeremy Robson</Name>
        </ProfileInfo>
      </Profile>
      <Tabs>
        <Tab href="#" onClick={() => handleTabChange("daily")}>
          Daily
        </Tab>
        <Tab href="#" onClick={() => handleTabChange("weekly")}>
          Weekly
        </Tab>
        <Tab href="#" onClick={() => handleTabChange("monthly")}>
          Monthly
        </Tab>
      </Tabs>
    </Wrapper>
  );
};
```

Card.jsx

```jsx
const Card = ({ props }) => {
  const tab = useContext(DataTimeframeContext);
  // console.log(tab)
  // console.log(tab.tab)
  return (
    <Wrapper props={props}>
      <Details>
        <Header>
          <HeaderText>{props.title}</HeaderText>
          <IoIosMore size={25} color="white" cursor={"pointer"} />
        </Header>
        <Main>
          {tab.tab === "daily" && (
            <>
              <MainText1>{props.timeframes.daily.current}hrs</MainText1>
              <MainText2>
                Yesterday-{props.timeframes.daily.previous}hrs
              </MainText2>
            </>
          )}
          {tab.tab === "weekly" && (
            <>
              <MainText1>{props.timeframes.weekly.current}hrs</MainText1>
              <MainText2>
                Last Week-{props.timeframes.weekly.previous}hrs
              </MainText2>
            </>
          )}
          {tab.tab === "monthly" && (
            <>
              <MainText1>{props.timeframes.monthly.current}hrs</MainText1>
              <MainText2>
                Last Month-{props.timeframes.monthly.previous}hrs
              </MainText2>
            </>
          )}
        </Main>
      </Details>
    </Wrapper>
  );
};
```
sass in react using styled components and responsive design.
Example:
```jsx
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
```



### Continued development

I will continue development with responsive designs.



<!-- ## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername) -->