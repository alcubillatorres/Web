const Boton = (props) => {
  return (
      <div>
        <button type={props.tipo} className={props.clase}>
          {props.texto}
        </button>
      </div>
    );
  };

export default Boton;
