import imagen1 from "./harry.png";
const Acercade = () => {
  return (
    <div class="inicio_div">
      <nav>
        <section>
          <span>🦍</span>
          <span>HOLA</span>
          <span>🦍</span>
        </section>
      </nav>

      <p>Aqui podran ver mi informacion personal basica</p>
      <h1></h1>
      <ul></ul>
      <nav>
        <p></p>
        <ul class="name_me">
          <b>NOMBRE:</b> HARRINSON CHAUX PANTOJA
        </ul>
        <ul class="ocupation_me">
          <b>OCUPACION:</b> ESTUDIANTE Y TRABAJO EN TELECOMUNICACIONES
        </ul>
        <ul class="age_me">
          <b>EDAD:</b> 23 AÑOS
        </ul>
        <ul>
          <b>ESTADO CIVIL:</b> SOLTERO
        </ul>
        <p></p>
      </nav>
      <ul></ul>
      <center>
        <img src={imagen1} width="350" height="350"></img>
      </center>

      <ul></ul>
      <h1>PRESENTACION ACADEMICA</h1>
      <nav>
        <ul class="estudio_me">
          <b>ESTUDIOS: </b> <img
          src="https://sibcolombia.net/wp-content/uploads/2017/08/logo-itp-350x350.png"
          width="28"
          height="28"
        />{" "} INSTITUTO TECNOLOGICO DEL PUTUMAYO Y <img
        src="https://sibcolombia.net/wp-content/uploads/2017/08/logo-itp-350x350.png"
        width="28"
        height="28"
      />{" "}INSTITUCION
          EDUCATIVA PIOXII
        </ul>
        <ul class="sigueme_me">
          <b>SIGUEME EN</b>
          <nav>{/* <button>aqui va el logo de WHATSAPP</button> */}</nav>
          <ul>
            <b>
              <img
                src="https://th.bing.com/th/id/R.10f0338adc21ae0f23953991672399b8?rik=3UldiG44OXk6hA&riu=http%3a%2f%2fwellnessadvocatesofhope.com%2fwp-content%2fuploads%2f2015%2f02%2ffacebook.jpg&ehk=996P4N8rYbhdha9BsFNHEsAMNWHKdPORpUvTHDyVLJM%3d&risl=&pid=ImgRaw&r=0"
                width="18"
                height="18"
              />{" "}
              FACEBOOK:{" "}
            </b>{" "}
            HARRY CHAUX{" "}
          </ul>
          <ul>
            <b>
              <img
                src="https://www.freepnglogos.com/uploads/instagram-icon-png/instagram-icon-buddha-quotes-that-can-change-your-life-gabriela-green-24.png"
                width="18"
                height="18"
              />{" "}
              INSTAGRAM:{" "}
            </b>{" "}
            HARRY16{" "}
          </ul>
        </ul>
        <ul class="contacto_me">
        <b>PARA MAS INFORMACION</b>
          <ul>
            <b>
              <img
                src="https://freepngimg.com/thumb/whatsapp/77160-viber-apps-messenger-facebook-iphone-messaging-whatsapp.png"
                width="18"
                height="18"
              />{" "}
              WHATSAPP:{" "}
            </b>{" "}
            3123862821{" "}
          </ul>
          <b>EMAIL</b> HOLATENGAUSTEDUNBUENDIA@GMAIL.COM
        </ul>

        <ul class="email_me">
          
        </ul>
      </nav>
    </div>
  );
};
export default Acercade;
