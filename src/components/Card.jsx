import React, { useContext } from "react";
import styled from "styled-components";
import { IoIosMore } from "react-icons/io";
import { DataTimeframeContext } from '../App';
import { mobile, tablet } from "../theme/theme";

const Wrapper = styled.div`
    display: grid;
    position: relative;
    border-radius: 20px;
    background: url(${props => props.props.image}) ${props => props.props.color};
    ${mobile({minHeight:'150px',overflow:'auto'})}
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    ${tablet({justifyContent:"space-around"})}
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 80%;
    border-radius: 18px;
    transition: 0.5s ease;
    background-color: ${({ theme }) => theme.neutrals.darkBlue};

    &:hover,&:active {
        background-color: hsl(235.3125, 42.666666666666664%, 29.411764705882355%);
        cursor: pointer;
    }
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin: 20px;
    ${tablet({ margin: "15px" })}
`;

const HeaderText = styled.p`
    font-size: 18px;
    color: white;
    ${tablet({ fontSize: "15px" })}
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    ${mobile({ flexDirection:'row',justifyContent:'space-between',alighItems:'center' })}
`;

const MainText1 = styled.p`
    font-size: 45px;
    color: white;
    margin-left: 20px;
    ${tablet({ fontSize: "30px", marginLeft: "15px" })}
    ${mobile({ fontSize: "30px", marginLeft: "15px" })}
`;

const MainText2 = styled.p`
    font-size: 13px;
    ${({ theme }) => `
        color: ${theme.neutrals.paleBlue};
    `}
    margin-left: 20px;
    ${tablet({ fontSize:"9px"})}
`;

const Card = ({ props }) => {
    const tab = useContext(DataTimeframeContext)
    // console.log(tab)
    // console.log(tab.tab)
    return (
        <Wrapper props={props}>
          <Details>
            <Header>
              <HeaderText>{props.title}</HeaderText>
              <IoIosMore size={25} color="white" cursor={'pointer'} />
            </Header>
            <Main>
              {tab.tab === 'daily' && (
                <>
                  <MainText1>{props.timeframes.daily.current}hrs</MainText1>
                  <MainText2>Yesterday-{props.timeframes.daily.previous}hrs</MainText2>
                </>
              )}
              {tab.tab === 'weekly' && (
                <>
                  <MainText1>{props.timeframes.weekly.current}hrs</MainText1>
                  <MainText2>Last Week-{props.timeframes.weekly.previous}hrs</MainText2>
                </>
              )}
              {tab.tab === 'monthly' && (
                <>
                  <MainText1>{props.timeframes.monthly.current}hrs</MainText1>
                  <MainText2>Last Month-{props.timeframes.monthly.previous}hrs</MainText2>
                </>
              )}
            </Main>
          </Details>
        </Wrapper>
      );

};

export default Card;
