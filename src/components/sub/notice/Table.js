import Info from "./Info";
import { useEffect, useState } from "react";

function Table({ listCondition, list }) {
  const [InfoList, setInfoList] = useState(list);
  useEffect(() => {
    setInfoList(
      listCondition === "import"
        ? list.filter((info) => info.condition === "import")
        : list
    );
  }, [listCondition, list]);

  return (
    <div>
      공지사항 테이블
      <table border="1">
        <tbody>
          {/* 제목 내용 반복문 */}
          {InfoList?.map((info) => (
            <Info info={info} key={info.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
