const Input = (value, type, placeholder, setValue) => (
  <input
    onChange={(event) => setValue(event.target.value)}
    value={value}
    type={type}
    placeholder={placeholder}
  />
);

export default Input;
