const Input = (value: any, type: any, placeholder: any, setValue: any) => (
  <input
    onChange={(event) => setValue(event.target.value)}
    value={value}
    type={type}
    placeholder={placeholder}
  />
);

export default Input;
