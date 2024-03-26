import styled from "styled-components";

export const Main = styled.main`  
`
export const Section = styled.section`
    background-color: #FFC72C;
`

export const Product = styled.figure`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 9rem;
    height: 77vh;

    #snack {
        width: 27%;
        height: 77%;
    }

    figcaption {
        width: 42vw;
        color: #FFFFFF;
        font-size: 3rem;
        font-weight: 900;
    }

    span {
        color: #DB0007;
    }

    @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
        gap: 0;
        height: 70vh;

        #snack {
            width: 38vw;
            height: 38vh;
        }

        figcaption {
            font-size: 2rem;
            width: 83vw;
        }
    }

    @media (min-width: 481px) and (max-width: 767px) {
        display: flex;
        flex-direction: column;
        gap: 0;
        height: 40vh;

        #snack {
            width: 38%;
            height: 44%;
        }

        figcaption {
            width: 22rem;
            font-size: 2.1rem;
        }
    }

    @media (min-width: 767px) and (max-width: 991px) {
        height: 29vh;
        gap: 0;

        figcaption {
            font-size: 2.5rem;
            width: 55vw;
        }
    }

    @media (min-width: 991px) and (max-width: 1199px) {
        #snack {
            width: 27%;
        }

        figcaption {
            width: 50vw;
            font-size: 2.7rem;
        }
    }

    @media (min-width: 1199px) and (max-width: 1919px) {
        height: 60vh;
    }
`
export const Snacks = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 38vh;

    div {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 60vw;
    }

    .snacks {
        width: 110%;
        height: 20vh;
        cursor: pointer;
    }

    @media (max-width: 480px) {
        height: 26vh;

        .snacks {
            width: 18vw;
            height: 15vh;
        }
    } 

    @media (min-width: 481px) and (max-width: 767px) {
        height: 16vh;

        .snacks {
            height: 10vh;
        }
    }

    @media (min-width: 767px) and (max-width: 991px) {
        height: 20vh;

        .snacks {
            width: 85%;
            height: 14vh;
        }
    }

    @media (min-width: 1199px) and (max-width: 1919px) {
        height: 27vh;

        .snacks {
            height: 18vh;
        }
    }
`

export const Promotion = styled.section`
    background-color: #FEB706;
    height: 100vh;

    h2 {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 26vh;
        color: #FFF;
        font-size: 2rem;
    }

    .card {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 60vh;
    }

    @media (max-width: 480px) {
        height: 192vh;

        h2 {
            height: 15vh;
        }

        .card {
            flex-direction: column;
            height: 170vh;
        }
    }

    @media (min-width: 481px) and (max-width: 767px) {
        height: 100%;

        h2 {
            height: 13vh;
        }

        .card {
            flex-direction: column;
            height: 150vh;
        }
    }

    @media (min-width: 767px) and (max-width: 991px) {
        height: 50vh;

        h2 {
            height: 10vh;
        }

        .card {
            height: 35vh;
        }
    }

    @media (min-width: 991px) and (max-width: 1199px) {
        h2 {
            height: 20vh;
        }
    }

    @media (min-width: 1199px) and (max-width: 1919px) {
        height: 80vh;

        h2 {
            height: 20vh;
            font-size: 2.4rem;
        }

        .card{
            height: 55vh;
        }
    }    
`

export const Card = styled.div`
    height: 52vh;
    width: 21vw;
    background-color: #FFF;
    border-radius: 14px 14px 20px 20px;

    img {
        width: 100%;
        border-radius: 10px 10px 0 0;
    }

    figcaption {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 11vh;
        text-align: center;
        font-weight: bold;
    }

    #btn {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 9vh;
    }

        
    button {
        width: 13vw;
        height: 7vh;
        font-size: 1rem;
        background-color: #FFBC0D;
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }

    @media (max-width: 480px) {
        width: 72vw;
        height: 49vh;

        figcaption {
            height: 13vh;
        }

        #btn {
            height: 9vh;
        }

        button {
            width: 30vw;
            height: 6vh;
        }
    }

    @media (min-width: 481px) and (max-width: 767px) {
        width: 72vw;
        height: 42vh;

        button {
            width: 32vw;
            height: 5.3vh;
        }
    }


    @media (min-width: 767px) and (max-width: 991px) {
        width: 28vw;
        height: 28vh;

        figcaption {
            height: 8vh;
        }

        #btn {
            height: 6vh;

        }

        button {
            width: 20vw;
            height: 4vh;
        }
    }

    @media (min-width: 991px) and (max-width: 1199px) {
        height: 43vh;
    }

`