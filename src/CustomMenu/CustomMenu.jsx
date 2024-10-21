import "./CustomMenu.css";
import MenuPoint from "../MenuPoint/MenuPoint";

export default function CustomMenu({ file }) {

  return (
    <div className="custom-menu">

    {file.map(data => (
      <a key={data[0]}>
        <h3>{data[0]}</h3>
        {data[1].getImage()}
        </a>
      
      ))}
    </div>
  );
}
