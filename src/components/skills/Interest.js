import React, { Component } from "react";
import classes from "./Interest.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

class Interest extends Component {
  render() {
    return (
      <div className={classes.box} id="interest">
        <ScrollAnimation
          offset="0"
          animateIn="fadeInLeft"
          duration="2.4"
          animateOnce="true"
          initiallyVisible={true}
        >
          <span className={classes.head}>O que eu faço?</span>
          <h2 className={classes.heading}>Minhas especialidades</h2>
          <div className={classes.Interest}>
            <ScrollAnimation
              offset="0"
              animateIn="fadeInLeft"
              duration="2.4"
              animateOnce="true"
              initiallyVisible={true}
            >
              <div className={classes.web}>
                <h3>Desenvolvimento de APP</h3>
                <p>
                  Eu tenho conhecimento no desenvolvimento de APP nas linguagens
                  java,c, c++, python e java orientado a objeto que foi base
                  para a construção do app do TCC apresentado no Instituto
                  Federal de Mato Grosso do Sul sobre automação residencial
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              offset="0"
              animateIn="fadeInLeft"
              duration="2.4"
              animateOnce="true"
              initiallyVisible={true}
            >
              <div className={classes.app}>
                <h3>Desenvolvimento Web</h3>
                <p>
                  Atualmente trabalho em um projeto na área de desenvolvimento
                  Web no Destacamento de Controle do Espaço Aéreo de Corumbá
                  utilizando o Joomla! que é um sistema livre open source de
                  gestão de conteúdo web desenvolvido em PHP e com base de dados
                  MySQL, executado em um servidor interpretador. Também com
                  conhecimento em PHP,CSS,HTML e JAVASCRIPT{" "}
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              offset="0"
              animateIn="fadeInLeft"
              duration="2.4"
              animateOnce="true"
              initiallyVisible={true}
            >
              <div className={classes.other}>
                <h3>Outros Interesses</h3>
                <p>
                  {" "}
                  Também tenho interesse em controle de tráfego de dados das
                  páginas web, gerenciamento de rede e banco de dados dos sites{" "}
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Interest;
