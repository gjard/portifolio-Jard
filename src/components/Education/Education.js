import React, { Component } from "react";
import classes from "./Education.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import { MdSchool } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { FaSchool } from "react-icons/fa";

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id="education">
        <ScrollAnimation
          offset="0"
          animateIn="fadeInLeft"
          duration="2"
          animateOnce="true"
          initiallyVisible={true}
        >
          <span className={classes.head}>Historico</span>
          <section className={classes.container}>
            <div className={classes.container_content}>
              <div className={classes.row}>
                <div className={classes.row_md_12}>
                  <div className={classes.timeline_centered}>
                    <ScrollAnimation
                      offset="0"
                      animateIn="fadeInLeft"
                      duration="2.4"
                      animateOnce="true"
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div
                          className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}
                        >
                          <FaSchool />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Ensino médio <span>2014-2017</span>
                          </h2>
                          <p>
                            Eu tenho o ensino médio completo integrado ao
                            técnico em informática formado pelo Instituto
                            Federal de Mato Grosso do Sul Campus Pantanal.{" "}
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset="0"
                      animateIn="fadeInLeft"
                      duration="2.4"
                      animateOnce="true"
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={classes.timeline_icon}>
                          <MdSchool />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Graduação na UFMS{" "}
                            <span>2019 - 2021 - Presente</span>
                          </h2>
                          <p>
                            Eu estou completando minha graduação em Sistemas de
                            Informação na Universidade Federal de Mato Grosso do
                            Sul Campus Pantanal from{" "}
                            <a href="https://cpan.ufms.br/">UFMS</a>.{" "}
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset="0"
                      animateIn="fadeInLeft"
                      duration="2.4"
                      animateOnce="true"
                      initiallyVisible={true}
                    >
                      <article>
                        <div
                          className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}
                        >
                          <MdWork />
                        </div>
                        <div className={classes.label}>
                          <h2>Atuação</h2>
                          <p>
                            Atuo profissionalmente na área de tecnologia de
                            informação há 4 anos no Destacamento de Controle do
                            Espaço Aereo de Corumbá. E há 1 ano focado na
                            programação Web da página.
                          </p>
                        </div>
                        <div className={classes.timeline_entry_inner}>
                          <div
                            className={
                              classes.timeline_icon_3 || classes.color_none
                            }
                          ></div>
                        </div>
                      </article>
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Education;
