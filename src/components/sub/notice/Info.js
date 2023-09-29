import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../../common/Modal';

function Info({info}) {
  const navigate = useNavigate();
  const openModal = useRef(null);
  const [IsCheck, setIsCheck] = useState(false)
  function toggleCheck() {
    setIsCheck(!IsCheck);
  }
  {/** isCheck 로 중요로 바꿔주기 
  이미 isCheck=true인 공지사항은 checkbox disable
  수정페이지 들어가서 중요 해제 할 수 있음.
  */}
  return (
    <>
      <tr>
        <td rowSpan={2}>
          <input type="checkbox" checked={info.isCheck} onChange={toggleCheck}/>
        </td>
        <th scope='row'>
          <label htmlFor='title'>제목</label>
        </th>
        <td>
          <p>{info.title}</p>
        </td>
        <td rowSpan={2}>
          <button onClick={() => {openModal.current.open()}}>삭제</button>
          <button onClick={() => navigate('/notice/modify')}>수정</button>
        </td>
      </tr>
      {/* password */}
      <tr>
        <th>
          <label htmlFor='text'>내용</label>
        </th>
        <td>
          <p>{info.text}</p>
        </td>
      </tr>
      <Modal ref={openModal}>
        <p>삭제하시곘습니까?</p>
      </Modal>
    </>
  )
}

export default Info
