import * as S from "./main_style"

export default function Card({ img, text }) {
    return (
        <S.Card>
                <figure>
                    <img src={img} alt="Promoção" />
                    <figcaption>{text}</figcaption>
                </figure>
                <div id="btn">
                    <button>Clique aqui</button>
                </div>
            </S.Card>
    )
}