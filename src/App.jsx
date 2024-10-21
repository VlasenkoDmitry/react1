import "./App.css";
import CustomSideBlock from "./CustomSideBlock/CustomSideBlock";
import TableBlock from "./TableBlock/TableBlock";
import { useEffect, useState } from "react";

function App() {
  const [mainData, setMainData] = useState([]);


  const prepareData = (data) => {
    const titleColumns = ['name', 'email', 'phone', 'website', 'status'];
    const result = data.reduce((accom,elem) => {
      const data = {}
      titleColumns.forEach((title)=>{
        if (title === 'status') {
          data[title] = 'view'
        } else {
          data[title] = elem[title]
        }
    })
      accom.push(data)
      return accom
    },[])

    return [titleColumns, result]
  }

  useEffect(() => {
    async function getData() {
      try {
        const responce = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await responce.json();
        const result = prepareData(data);
        setMainData(result);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  // useEffect(() => {
  //   const getData = () => fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     // .then((data) =>(prepareData(data)))
  //     .then((data) => setMainData(data))
  //     .catch((error)=>(console.log(error))) 

  //     getData()
  // },[]);


  return (
    <>
      <main className="main-container grid-container">
        <div className="side-block-container">
          <CustomSideBlock />
        </div>
        <div className="main-block-container">
          <div className="main-block">
            <h3>Hello Evano 👋🏼,</h3>
            <TableBlock data={mainData} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
