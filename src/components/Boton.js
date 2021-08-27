const Boton = (props) => {
  return (
      <div>
        <button type={props.tipo} className="mt-3 btn btn-outline-primary">
          {props.texto}
        </button>
      </div>
    );
  };

export default Boton;
