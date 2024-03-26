import logo from "../../assets/logo.svg"
import phone from "../../assets/phone.svg"
import cell from "../../assets/cell.svg"
import * as S from "./header_style";

export default function Header() {
  return (
    <S.Header>
        <figure id="logo">
            <img src={logo} alt="Logo McDonald's" />
        </figure>

        <S.Nav>
            <button id="download">
                <img src={phone} alt="Telefone" />
                Baixe o App
            </button>

            <button id="order">
                Peça seu Méqui
                <img id="cell" src={cell} alt="Celular" />
            </button>
        </S.Nav>
    </S.Header>
  );
}
