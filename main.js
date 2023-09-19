let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  cursor: "<span style= color:#eddaed></span>"
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style= "color:#e5bae5"> Aprendiendo sobre programación y revolucionando el mundo con proyectos sociales.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
