import * as S from "./components/Header/header_style";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";


export default function App() {
  return (
    <>
        <S.GlobalStyle />
        <Header />
        <Main />
        <Footer />
    </>
  )
}
