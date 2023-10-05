import Info from './Info';

function Table({ list }) {
  return (
    <div>
      <table border="1">
        <tbody>
          {/* 제목 내용 반복문 */}
          {list?.map((info) => (
            <Info info={info} key={info.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
