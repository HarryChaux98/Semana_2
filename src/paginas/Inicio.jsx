import { Link } from "react-router-dom";
const Inicio = () => {
  return (
    <div class="inicio_div">
      <nav>
        <section>
          <span>BIEN</span>
          <span>VEN</span>
          <span>IDOS</span>
        </section>
      </nav>
      <p class="Centrartexto">
        No importa si ha sido creada por el desarrollador más experto o por el
        más novato, toda aplicación web puede llegar a tener errores. Estos
        errores se pueden dar, entre muchas razones, por caídas de internet y
        errores del usuario. Aunque algunos de estos errores debemos
        comunicarlos, el usuario no necesita toda la información.
      </p>
      <ul>
        <p>
          Aqui podras ver mi datos personales y de como contactarte conmigo{" "}
        </p>
      </ul>

      <h1>
        <img
          src="https://th.bing.com/th/id/R.f8e3cdeab0edb251a05736a3c2347da0?rik=wX5QpIiXiiKr1w&riu=http%3a%2f%2fwww.imagenesanimadas.net%2fPersonas%2fOjos%2fOjos-66.gif&ehk=RepBkMbs1TMcN89QLBPt3LOmZ16rp9evBGqnyZcftDE%3d&risl=&pid=ImgRaw&r=0"
          width="120"
          height="120"
        />{" "}
        SIGUE VIENDO{" "}
      </h1>
      <p>click en Acerca de para mas informacion</p>
    </div>
  );
};
export default Inicio;
