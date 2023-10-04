import Pagination from "react-js-pagination";

const Paging = ({ page, count, postPerPage, setPage }) => {
  return (
    <Pagination
      activePage={page} //현재 페이지
      itemsCountPerPage={postPerPage} //한 페이지 당 보여줄 아이템 수
      totalItemsCount={count} //총 아이템 수
      pageRangeDisplayed={5} // paginator에서 보여줄 페이지 범위
      prevPageText={"‹"} //이전 페이지로 가기를 나타내는 텍스트
      nextPageText={"›"} //다음 페이지로 가기를 나타내는 텍스트
      onChange={setPage} //페이지가 바뀔 때 핸들링하는 함수
    />
  );
};

export default Paging;
