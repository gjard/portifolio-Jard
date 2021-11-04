import React, { Component } from "react";
import classes from "./About.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

class About extends Component {
  render() {
    return (
      <div className={classes.box} id="about">
        <ScrollAnimation
          offset="0"
          animateIn="fadeInLeft"
          duration="2.4"
          animateOnce="true"
          initiallyVisible={true}
        >
          <span className={classes.head}>Sobre mim</span>
          <h2 className={classes.heading}>Quem eu sou?</h2>
          <div className={classes.About}>
            <p>
              {" "}
              Meu nome é Gabriel Jard e estou cursado bacharel em Sistemas de
              Informação na Universidade Federal de Mato Grosso do Sul e
              pretendo desenvolver muitos projetos Web{" "}
            </p>
            <p className={classes.br}>
              Gosto de conhecer e aprender as novas tecnologias diariamete
              atualizadas.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default About;
