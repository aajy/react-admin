function Info() {
  return (
    <>
      <tr>
        <td rowSpan={2}>
          <input type="checkbox"/>
        </td>
        <th scope='row'>
          <label htmlFor='title'>제목</label>
        </th>
        <td>
          <p>제목 자리</p>
        </td>
        <td rowSpan={2}>
          <input type='button' value='삭제' />
          <input type='button' value='수정' />
        </td>
      </tr>
      {/* password */}
      <tr>
        <th>
          <label htmlFor='text'>내용</label>
        </th>
        <td>
          <p>내용 자리</p>
        </td>
      </tr>
    </>
  )
}

export default Info
