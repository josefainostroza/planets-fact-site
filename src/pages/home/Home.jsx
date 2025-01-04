import Header from "../../components/header/Header";
import { StyledHome } from "./home.styles";

const Home = () => {
    return (
    <>
    <Header/>
    <StyledHome>
    <img src='/assets/solar-sistem.png' alt='Sistem-Solar' />
    </StyledHome>
    </>
    );
};

export default Home;