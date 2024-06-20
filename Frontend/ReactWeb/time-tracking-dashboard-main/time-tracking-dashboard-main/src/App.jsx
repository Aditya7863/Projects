import styled, { ThemeProvider } from 'styled-components';
import { theme, mixins, mobile, tablet } from './theme/theme';
import Sidebar from './components/Sidebar';
import Card from './components/Card';
import data from '../src/data.json';
import { createContext, useState } from 'react';

export const DataTimeframeContext = createContext();

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  ${mixins.flexCenter}
  ${({ theme }) => `
    background-color: ${theme.neutrals.veryDarkBlue};
  `}
`;

const Wrapper = styled.div`
  display: grid;
  background-color: transparent;
  height: 50vh;
  width: 60vw;
  ${tablet({ height: '40vh', width: '80vw' })}
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  ${mobile({
    height: 'auto',
    minHeight: '80vh',
    overflow:'auto',
    width:'90vw',
    gridTemplateColumns: '1fr'
  })}
  position: relative;
  ${({ theme }) => `
  `}
`;

function App() {
  const [tab, setTab] = useState('daily');

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

export default App;
