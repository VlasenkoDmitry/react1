import "./TableBlock.css";
import View from "../View/View";

export default function TableBlock({ data }) {
  const [titleColumns, results] = data;

  return (
    <div className="table-block">
      <h3>
        <strong>All Customers</strong>
      </h3>
      <table>
        <thead>
          <tr>
            {titleColumns?.map((title, index) => (
              <td key={index}>{title}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {results?.map((result, rowIndex) => (
            <tr key={rowIndex}>
              {titleColumns?.map((title, colIndex) => (
                <td key={colIndex} className={title === "status" ? "statusButton" : ""}>
                  {result[title]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
