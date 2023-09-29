import Info from './Info';

function Table() {
  return (
    <div>
      공지사항 테이블
      <table border='1'>
        <tbody>
          {/* 제목 내용 반복문 */}
          <Info/>
          <Info/>
        </tbody>
      </table>
    </div>
  )
}

export default Table
