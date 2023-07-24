import "./InputField.scss"

const InputField = ({ type, placeholder, onChange, htmlFor, name, label, Icon }) => {
    return (
        <div className="full-input">
            <label htmlFor={htmlFor}>{label}</label>
            <div className="input-holder"><span className="icon-field outside">{Icon}</span><input type={type} placeholder={placeholder} onChange={onChange} name={name} /></div>
        </div>
    )
}

export default InputField