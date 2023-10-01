import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../../common/Modal';

function Info({info}) {
  const navigate = useNavigate();
  const openModal = useRef(null);
  const getFetch = ()=> {
    fetch(`http://localhost:3001/info/${info.id}`, {
      method: 'DELETE',
    })
    .then(res => {
      if (res.ok) {
        alert("삭제되었습니다.");
      }
    })
  }
  return (
    <>
      <tr>
        {/* TODO :: 체크박스로 한번에 중요/일반으로 수정가능하도록 */}
        {/* <td rowSpan={2}>
          <input 
            type="checkbox" 
            checked={info.condition === "import"} 
            onChange={toggleCheck}
          />
        </td> */}
        <th scope='row'>
          <label htmlFor='title'>제목</label>
        </th>
        <td>
          <p>{info.title}</p>
        </td>
        <td rowSpan={2}>
          <button onClick={() => {openModal.current.open()}}>삭제</button>
          <button onClick={() => navigate('/notice/modify', {state: {...info}})}>수정</button>
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
      <tr>
        <td>
          <Modal 
            ref={openModal}
            getFetch={getFetch}
          >
            <p>삭제하시곘습니까?</p>
          </Modal>
        </td>
      </tr>
    </>
  )
}

export default Info
