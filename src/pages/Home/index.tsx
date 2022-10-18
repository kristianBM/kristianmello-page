import React, { useState, useEffect } from "react";
import { Typewriter } from 'react-simple-typewriter';
import { AiFillInstagram, AiFillGithub, AiFillLinkedin, AiOutlineUser, AiOutlineMenu, AiFillMail } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';
import krisImg from "../../assets/img/kris.jpg";
import './styles.css';



function Home() {



    return (

        <>
            <header className="navbar">
                <div className="max-width">
                    <div className="logo"><a href="#">Porti<span>fólio</span></a></div>
                    <ul className="menu">
                        <li><a href="#home">Inicio</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a href="#habilidades">Habilidades</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                    <div className="menu-btn">


                    </div>
                </div>
            </header>

            <section className="home" id="home">
                <div className="max-width">
                    <div className="home-content">
                        <div className="text-1">Olá, meu nome é</div>
                        <div className="text-2">Kristian Mello</div>
                        <div className="text-3">eu sou <span className="typing" >
                            <Typewriter
                                words={['desenvolvedor JAVA', 'desenvolvedor React', 'freelancer', 'viajante nas horas vagas!']}
                                loop={false}
                                cursor
                                cursorStyle='_'
                                typeSpeed={100}
                                deleteSpeed={70}
                                delaySpeed={1000}
                            />
                        </span></div>
                        <a href="#contact">Contato</a>
                    </div>
                </div>
            </section>

            <section className="about" id="about">
                <div className="max-width">
                    <h2 className="title">Sobre</h2>
                    <div className="about-content">
                        <div className="column left">
                            <img src={krisImg} alt="" />
                        </div>
                        <div className="column right">
                            {/* <div className="text">Sou Kristian e sou <span className="typing-2">
                                <Typewriter
                                    words={['dev Fullstack', 'freelancer', 'viajante nas horas vagas!']}
                                    loop={false}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={100}
                                    deleteSpeed={70}
                                    delaySpeed={1000}
                                />
                            </span></div> */}
                            <p>Minha paixão por criar sistemas para web e servidores nasceu em 2018 com a linguagem C++, a partir da curiosidade em desenvolver jogos online.
                                <br />
                                <br />
                                Dois anos depois, entrei para o curso de Sistema de Informação onde comecei a ter um maior contato com as tecnologias de desenvolvimento.
                                <br />
                                <br />
                                Após o início do curso, consegui minha vaga na área de T.I no Plano Santa Saúde onde pude aprimorar muitas das minhas habilidades na área.
                            </p>
                            <a href="https://spring-ionic-aws.s3.sa-east-1.amazonaws.com/curriculum.pdf" download >Download CV</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services" id="servicos">
                <div className="max-width">
                    <h2 className="title">Serviços</h2>
                    <div className="serv-content">
                        <div className="card">
                            <div className="box">

                                <div className="text">Desenvolvimento Backend</div>
                                <p>Criação de API's para atender as mais diversas necessidades de um sistema de forma simples e escalável.</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="box">

                                <div className="text">Desenvolvimento Frontend</div>
                                <p>Criação da parte visual de um site, com integração e consumo de dados.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section className="skills" id="habilidades">
                <div className="max-width">
                    <h2 className="title">Habilidades</h2>
                    <div className="skills-content">
                        <div className="column left">
                            <div className="text">Minhas habilidades criativas e experiências</div>
                            <p>Habilidades concretas no desenvolvimento de aplicações atuando tanto no backend quanto no frotend, construindo aplicações desde o absoluto 0 até sua publicação em nuvem utilizando as tecnologias mencionadas ao lado.
                            </p>
                            <a href="#contact">Mais informações</a>
                        </div>
                        <div className="column right">
                            <div className="bars">
                                <div className="info">
                                    <span>JAVA + Spring</span>
                                    <span>60%</span>
                                </div>
                                <div className="line java"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>TypeScript + React</span>
                                    <span>20%</span>
                                </div>
                                <div className="line ts"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>HTML + CSS</span>
                                    <span>10%</span>
                                </div>
                                <div className="line html"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>SQL</span>
                                    <span>9%</span>
                                </div>
                                <div className="line sql"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>Outros</span>
                                    <span>1%</span>
                                </div>
                                <div className="line outros"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="contact" id="contact">
                <div className="max-width">
                    <h2 className="title">Contato</h2>
                    <div className="contact-content">
                        <div className="column left">
                            <div className="text">Fale Comigo</div>
                            <p>Abaixo estão algumas formas de me encontrar pelas redes, certamente será um prazer receber seu contato.</p>
                            <div className="icons--table">
                                <div className="icons">

                                    <div className="row">
                                        <a href="mailto:kristian.bonfim@hotmail.com">
                                            <AiFillMail
                                                className="react--icon"
                                                size={60} />
                                        </a>
                                        <div className="info">
                                            <div className="head">Email</div>
                                            <div className="sub-title">kristian.bonfim@hotmail.com</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <a href="https://www.linkedin.com/in/kristian-mello-bonfim-733b42214/">
                                            <AiFillLinkedin size={60} className="react--icon" />
                                        </a>
                                        <div className="info">
                                            <div className="head">LinkedIn</div>
                                            <div className="sub-title">kristian.bonfim@hotmail.com</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="icons">
                                    <div className="row">
                                        <a href="https://github.com/kristianBM">
                                            <AiFillGithub size={60} className="react--icon" />
                                        </a>
                                        <div className="info">
                                            <div className="head">GitHub</div>
                                            <div className="sub-title">/kristianBM</div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <a href="https://www.instagram.com/kristianmello/">
                                            <AiFillInstagram size={60} className="react--icon" />
                                        </a>
                                        <div className="info">
                                            <div className="head">Instagram</div>
                                            <div className="sub-title">@kristianmello</div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <a href="https://www.google.com/maps/place/Praia+Grande,+State+of+S%C3%A3o+Paulo/@-24.0369462,-46.5020322,12z/data=!3m1!4b1!4m5!3m4!1s0x94ce1f9dd9bf50e5:0x83b44c5ff623bb51!8m2!3d-24.0030665!4d-46.4178533">
                                            <ImLocation size={60} className="react--icon" />
                                        </a>
                                        <div className="info">
                                            <div className="head">Endereço</div>
                                            <div className="sub-title">Praia Grande, SP</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <span>Criado por <a href="https://github.com/kristianBM">Kristian Mello</a> | Todos os direitos reservados 2022</span>
            </footer>

        </>

    )
}

export default Home;
