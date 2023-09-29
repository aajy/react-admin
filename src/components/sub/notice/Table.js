import Info from './Info';

function Table() {
  const infoList = [
    
  ];
  return (
    <div>
      공지사항 테이블
      <table border='1'>
        <tbody>
          {/* 제목 내용 반복문 */}
          {infoList.map(info => (
            <Info info={info} key={info.id}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
