import bigmac from "../../assets/bigmac.svg";
import hamburguer from "../../assets/hamburguer.svg";
import potato from "../../assets/batata.svg";
import ice_cream from "../../assets/sorvete.svg";
import img1 from "../../assets/img1.svg";
import img2 from "../../assets/img2.svg";
import img3 from "../../assets/img3.svg";

import { useState } from "react";
import * as S from "./main_style";
import Card from "./Card";

export default function Main() {
    const [image, setImage] = useState(bigmac)

  return (
    <S.Main>
        <S.Section>
            <S.Product>
                <img id="snack" src={image} alt="Lanche" />
                <figcaption>BATEU AQUELA <span>#FOME</span> DE <span>MÉQUI</span>?</figcaption>
            </S.Product>
            <S.Snacks>
                <div>
                    <figure>
                        <img className="snacks" onClick={() => {setImage(hamburguer)}} src={hamburguer} alt="Bigmac" />
                    </figure>
                    <figure>
                        <img className="snacks" onClick={() => {setImage(potato)}} src={potato} alt="Batata" />
                    </figure>
                    <figure>
                        <img className="snacks" onClick={() => {setImage(ice_cream)}} src={ice_cream} alt="Sorvete" />
                    </figure>
                </div>
            </S.Snacks>
        </S.Section>

        <S.Promotion>
            <h2>Promoção</h2>

            <section className="card">
                <Card img={img1} text={"Que tal um #MéquiNoSofá?"} />
                <Card img={img2} text={"Venha conhecer nossa nova loja"} />
                <Card img={img3} text={"Confira as medidas que o Méqui adotou!"} />
            </section>
            
        </S.Promotion>
    </S.Main>
  )
}
