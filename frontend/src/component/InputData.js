export default function InputData({
  type,
  inputClass,
  Outclass,
  placeholder,
  value,
}) {
  return (
    <>
      <div className={`form-group ${Outclass}`}>
        <input
          type={type}
          className={inputClass}
          placeholder={placeholder}
          value={value}
          required
        />
      </div>
    </>
  );
}
