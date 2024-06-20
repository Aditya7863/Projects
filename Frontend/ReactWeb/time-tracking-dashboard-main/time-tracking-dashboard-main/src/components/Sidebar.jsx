import { useContext } from "react"
import styled from "styled-components"
import { DataTimeframeContext } from '../App';
import { mobile, tablet } from "../theme/theme";

const Wrapper = styled.div`
        display: grid;
        position: relative;
        border-radius: 20px;
        grid-row: 1/3;
    ${({ theme }) => `
        background-color: ${theme.neutrals.darkBlue};

    `}
    ${mobile({ gridRow:"1/2"})}
`

const Profile = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    ${mobile({ flexDirection: "row",alignItems:"center" })}
    justify-content: space-around;
    width: 100%;
    height: 65%;
    border-radius: 20px;
    color: white;
    ${({ theme }) => `
        background-color: ${theme.neutrals.desaturatedBlue};
    `}
`
const ProfileImage = styled.img`
    margin: 20px;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    object-fit: cover;
    border: 4px solid white;
    ${tablet({ width: "50px",  height: "50px", margin:"15px" })}
    ${mobile({ width: "50px",  height: "50px", margin:"10px" })}
`
const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    ${tablet({ margin:"15px" })}
    ${mobile({ margin:"10px" })}
`

const Heading = styled.p`
    font-size: 13px;
    ${tablet({ fontSize: "20px" })}
    ${mobile({ fontSize: "16px" })}
    font-weight: 300;
    ${({ theme }) => `
        color: ${theme.neutrals.paleBlue};
    `}
`
const Name = styled.h1`
    font-size: 39px;
    font-weight: 300;
    ${tablet({ fontSize: "25px" })}
    ${mobile({ fontSize: "25px" })}
`
const Tabs = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: end;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 35%;
    background-color: transparent;
    padding-bottom: 15px;
    padding-left: 20px;
    ${mobile({ flexDirection: "row",justifyContent: "space-around" ,height: "28%",alignItems:"center",paddingBottom: "0px",
    paddingLeft: "0px" })}
`
const Tab = styled.a`
  color: ${({ theme }) => theme.neutrals.paleBlue};
  font-size: ${({ theme }) => theme.typography.fontSizeBody};
  ${tablet({ fontSize: "15px",padding: "5px" })}
  ${tablet({ fontSize: "10px",padding: "5px" })}
  text-decoration: none;
  padding: 8px;
  display: block;
  cursor: pointer;
  transition: 0.5s ease;

  &:hover,&:focus {
    color: white;
  }
`;

const Sidebar = () => {
    const {tab, setTab} = useContext(DataTimeframeContext)
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
                <Tab href="#" onClick={() => handleTabChange('daily')}>Daily</Tab>
                <Tab href="#" onClick={() => handleTabChange('weekly')}>Weekly</Tab>
                <Tab href="#" onClick={() => handleTabChange('monthly')}>Monthly</Tab>
            </Tabs>
        </Wrapper>
    )
}

export default Sidebar