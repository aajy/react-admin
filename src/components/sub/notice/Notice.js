import React, { useEffect, useState } from "react";
import Table from "./Table";
import { useNavigate } from "react-router-dom";
import Paging from "../../common/Paging";

function Notice() {
  const navigate = useNavigate();
  const [ListCondition, setListCondition] = useState("all");
  const [InfoList, setInfoList] = useState([]);
  const [Page, setPage] = useState(1);
  const postPerPage = 1; // 페이지 당 게시글 개수
  const indexOfLastPost = Page * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const [currentPosts, setCurrentPosts] = useState(0);
  useEffect(() => {
    fetch("http://localhost:3001/info")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setInfoList(
          ListCondition === "import"
            ? data.filter((info) => info.condition === "import")
            : data
        );
      });
    setPage(1);
  }, [ListCondition]);

  useEffect(() => {
    setCurrentPosts(InfoList.slice(indexOfFirstPost, indexOfLastPost));
  }, [InfoList, Page]);

  const setCurrentPage = (page) => {
    setPage(page);
  };
  const handleClickRadioButton = (e) => {
    setListCondition(e.target.value);
  };

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
      {currentPosts && InfoList.length ? (
        <Table list={currentPosts} />
      ) : (
        <div> No posts.</div>
      )}

      <Paging
        page={Page}
        count={InfoList.length}
        postPerPage={postPerPage}
        setPage={setCurrentPage}
      />
    </>
  );
}

export default Notice;
