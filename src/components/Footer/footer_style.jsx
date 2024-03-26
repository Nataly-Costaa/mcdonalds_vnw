import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 18vh;

    figure {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 22vw;
    }

    figure img {
        width: 11%;
        height: 8vh;
    }

    @media (max-width: 480px) {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 25vh;
        flex-direction: column;

        figure {
            width: 57vw;
        }
    }

    @media (min-width: 481px) and (max-width: 767px) {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 25vh;
        flex-direction: column;

        figure {
            width: 49vw;
        }
    }

    @media (min-width: 767px) and (max-width: 991px) {
        figure {
            width: 40vw;
        }    
    }
    
`
export const NavFooter = styled.nav`
    display: flex;
    justify-content: space-evenly;
    width: 35vw;
    height: 10vh;
    

    .app-download {
        width: 11vw;
        height: 8vh;
    }

    @media (max-width: 480px) {
        width: 65vw;

        .app-download {
            width: 100px;
            height: 8vh;
        }
    }

    @media (min-width: 481px) and (max-width: 767px) {
        width: 65vw;

        .app-download {
            width: 28vw;
        }
    }

    @media (min-width: 767px) and (max-width: 991px) {
        width: 50vw;

        .app-download {
            width: 20vw;
        }
    }
`

// Fazer responsividade e por uma font no projeto e depois subir para o github