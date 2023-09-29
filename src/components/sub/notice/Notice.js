import React from 'react'
import Table from './Table'
import { useNavigate } from 'react-router-dom';

function Notice() {
  const navigate = useNavigate();

  const navigateToInsert = () => {
    navigate("/notice/insert");
  };
  return (
    <>
      <h1>공지사항 페이지</h1>
      <div>
        <button onClick={navigateToInsert}>등록</button>
        <Table/>
      </div>
    </>
  )
}

export default Notice
