import React, { useEffect, useState } from 'react'
import Table from './Table'
import { useNavigate } from 'react-router-dom';

function Notice() {
  const navigate = useNavigate();
  const [ListCondition, setListCondition] = useState("all");
  const [InfoList, setInfoList] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/info')
    .then(res => {
      return res.json()
    })
    .then(data => {
      setInfoList(data);
    })
  },[])

  const handleClickRadioButton =(e)=>{
    setListCondition(e.target.value);
  }


  const navigateToInsert = () => {
    navigate("/notice/insert");
  };
  return (
    <>
      <button onClick={navigateToInsert}>등록</button>
      <div>
        <label>
          <input
            type="radio"
            value="all"
            checked={ListCondition === "all"}
            onChange={handleClickRadioButton}
          />
          전체
        </label>
        <label>
          <input
            type="radio"
            value="import"
            checked={ListCondition === "import"}
            onChange={handleClickRadioButton}
          />
          중요
        </label>
      </div>
      <Table listCondition={ListCondition} list={InfoList}/>
    </>
  )
}

export default Notice
