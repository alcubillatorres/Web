
const FormInput = (props) => {
    return (
        <div className="row">
        <div className=" col-6 col-sm-4">
          <div className="input-group-prepend">
            <div className="input-group-text bg-blue border border-white rounded">
              <label>
                <input
                  name={props.name}
                  type="checkbox"
                  className="custom-control-input m-1"
                  checked={props.status}
                  onChange={props.onchange}
                />
                {props.texto}
              </label>
            </div>
          </div>
        </div>
      </div>
		);
};

export default FormInput;