// AboutMe.js
import React from "react";

function AboutMe() {
  return (
    <div className="container my-5">
      <h2>Über mich</h2>
      <p>
        Hallo, mein Name ist Max Mustermann. Ich bin ein leidenschaftlicher Webentwickler mit Erfahrung in Frontend- und Backend-Technologien. 
        Ich habe in verschiedenen Projekten gearbeitet, die sowohl kreative als auch technische Herausforderungen beinhalteten.
      </p>
      <h3>Lebenslauf</h3>
      <ul>
        <li><strong>Ausbildung:</strong> Bachelor in Informatik</li>
        <li><strong>Berufserfahrung:</strong> 3 Jahre als Full-Stack Webentwickler</li>
        <li><strong>Skills:</strong> HTML, CSS, JavaScript, React, Node.js, Express.js</li>
        <li><strong>Hobbys:</strong> Reisen, Lesen, Schach spielen</li>
      </ul>
      <h3>Kontakt</h3>
      <p>Sie können mich per <a href="mailto:max@mustermann.de">E-Mail</a> erreichen.</p>
    </div>
  );
}

export default AboutMe;
