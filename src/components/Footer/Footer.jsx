import logo_footer from "../../assets/logo_footer.svg";
import google_play from "../../assets/google_play.svg";
import app_store from "../../assets/app_store.svg";

import * as S from "./footer_style";

export default function Footer() {
  return (
    <S.Footer>
        <figure>
            <img src={logo_footer} alt="" />
            <figcaption>© McDonald’s 2024</figcaption>
        </figure>

        <S.NavFooter>
            <figure>
                <img className="app-download" src={google_play} alt="GooglePlay" />
            </figure>
            <figure>
                <img className="app-download" src={app_store} alt="AppStore" />
            </figure>
        </S.NavFooter>
    </S.Footer>
  )
}
