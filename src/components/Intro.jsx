import React from "react";
import 'animate.css';


function Intro() {
  return (
    <section
      className="flex items-center justify-center flex-col text-center
     pt-16 pb-10"
    >
      <h1 className="animate__animated animate__bounceInDown dark:text-white text-4xl md:text-7xl md:pb-3  font-semibold">
        Hannyis Zoltán
      </h1>
      <h2 className="animate__animated animate__bounceInRight text-lg md:text-xl pb-3 font-medium">
        Junior Software & Web Developer
      </h2>
      <div className="animate__animated animate__backInLeft text-sm max-w-xl pt-5 px-4 md:pt-7 md:font-bold font-medium ">
        <p>
          Pályakezdő fejlesztőként jelenlegi tapasztalataim egy része iskolából
          származik, nagyobb része pedig az egyénileg szerzett tapasztalataim a
          különböző projektekből amik főleg webfejlesztéssel kapcsolatosak.
        </p>
        <br />
        <p>
          Több Programozási nyelv, leírónyelv és keretrendszer alapjait sikerült
          elsajátítanom saját erőből vagy az iskola segítségével pl.:(C#,
          JavaScript, AngularJS, HTML, CSS, PHP, Laravel, SQL). Ezek egy részét
          sikerült haladó szinten megismernem, mint API készítés és tesztelés a
          Laravel keretrendszerben, tesztelve Postman-ben. Céges környezetben
          szeretném tudásom tovább fejleszteni és javítani.
        </p>
        <br />
        <p>
          Hobbijaim közé sorolnám új technológiákról szóló videók vagy hírek
          megtekintését/tanulmányozását, időtöltést a barátaimmal. Mindemellett
          elvégeztem a SoloLearn platformján a PHP és JavaScript kurzust,
          folyamatban van a frontend ReactJS+Redux kurzus, továbbá tanulmányozok
          egyéb oktató videókat/kurzusokat az interneten és próbálom az ezekből
          szerzett tudást különböző projektekben hasznosítani.
        </p>
        <br />
        <p>
          Nyitott vagyok mindenre ami a szakmával kapcsolatos, valamint jobbá
          szeretnék válni azáltal, hogy valós problémákat oldok meg minél
          hatékonyabban és megbízhatóan. Remélem sikerült felkeltenem az
          érdeklődésüket.
        </p>
      </div>
    </section>
  );
}

export default Intro;
