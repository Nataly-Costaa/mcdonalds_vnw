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
`

// Fazer responsividade e por uma font no projeto e depois subir para o github