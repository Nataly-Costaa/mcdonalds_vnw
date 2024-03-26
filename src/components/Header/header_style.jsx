import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`

 * {
     margin: 0;
     padding: 0;
     box-sizing:border-box;
     font-family: sans-serif;
 }

`;

const Center = css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;
const LineUp = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Header = styled.header`
    ${LineUp}
    height: 6rem;

    #logo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 12%;
    }

    #logo img {
        width: 46%;
        height: 50%;
    }


    @media (max-width: 480px) {    
        #logo {
            width: 19vw;
        }
        #logo img{
            width: 8vw;
            height: 7vh;
        }
    }

    @media (min-width: 1919px) {
        height: 15vh;
    }
`

export const Nav = styled.nav`
    width: 40vw;
    height: 13vh;
    gap: 2rem;
    ${Center}

    #download {
        ${Center}
        gap: 1rem;
        width: 9rem;
        border: none;
        background-color: #fff;
        font-size: 0.9rem;
        cursor: pointer;
    }

    #download img {
        width: 22%;
        height: 22%;
    }

    #order {
        ${Center}
        padding: 0.4rem;
        width: 35%;
        height: 8vh;
        border-radius: 0.6rem;
        border: none;
        background-color: #FFC72C;
        font-weight: 900;
        cursor: pointer;
    }

    #cell {
        width: 17%;
        height: 100%;
    }

    @media (max-width: 480px) {
        width: 85vw;
        height: 6vh;
        gap: 0;

        #download {
            gap: 0;
        }

        #order {
            font-size: 0.7rem;
            width: 36vw;
            height: 6.9vh;
        }
    }


    @media (min-width: 481px) and (max-width: 767px) {
            width: 70vw;
            gap: 0;

            #download {
                gap: 0;
                width: 20vw;
                font-size: 0.8rem;
            }

            #order {
                font-size: 0.7rem;
            }
        }

        @media (min-width: 767px) and (max-width: 991px) {
            width: 55vw;
            height: 7vh;

            #order {
                height: 5.5vh;
            }
        }
`