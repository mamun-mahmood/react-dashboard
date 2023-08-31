import "./ToggleSwitch.css";
const ToggleSwitch = ({ toggleDarkMode }) => {
  return (
    <label className="ui-switch">
      <input onChange={() => toggleDarkMode()} type="checkbox" />
      <div className="slider">
        <div className="circle"></div>
      </div>
    </label>
  );
};

export default ToggleSwitch;
