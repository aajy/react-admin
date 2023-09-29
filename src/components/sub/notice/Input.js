import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Input() {
  const navigate = useNavigate();
  const [IsCheck, setIsCheck] = useState(false)
  
  const handleSubmit = (e) => {
		e.preventDefault();
	};

  const initVal = {
    title:'',
    text:'',
  }
  const [Val, setVal] = useState(initVal);
  // useRef 를 써서 데이터가 변경될 때 마다 실시간 감지를 할 수있음. useState는 재랜더링 시에 감지.
  
  const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...Val, [name]: value });
	};

  const resetForm = () => {
		setVal(initVal);
	};
  const handleClickRadioButton = (e) =>{
    setIsCheck(e.target.value)
  }

  return (
    <>
      {/* 제목 내용 전송 폼 */}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend className='h'>공지사항</legend>
          <table border='1'>
            <tbody>
              {/* isCheck */}
              {/* <tr>
                <label>
                  <input type="radio" value ="false" checked ={IsCheck === false} onChange={(e) =>handleClickRadioButton(e)} />
                  보통
                </label>
                <label>
                  <input type="radio" value ="true" checked ={IsCheck === true} onChange={(e) =>handleClickRadioButton(e)} />
                  중요
                </label>
              </tr> */}
              {/* title */}
              <tr>
                <th scope='row'>
                  <label htmlFor='title'>제목</label>
                </th>
                <td>
                  <input
                    type='text'
                    name='title'
                    placeholder='제목을 입력하세요.'
                    value={Val.title}
                    onChange={handleChange}
                  />
                </td>
              </tr>

              {/* text */}
              <tr>
                <th>
                  <label htmlFor='text'>내용</label>
                </th>
                <td>
                  <textarea
                    name='text'
                    placeholder='내용을 입력하세요.'
                    cols='30'
                    rows='10'
                    value={Val.text}
                    onChange={handleChange}
                    required
                    wrap
                  />
                  {/* 
                  required : 폼 데이터(form data)가 서버로 제출되기 전 텍스트 입력 영역이 반드시 채워져 있어야 함을 명시함.
                  wrap : 폼 데이터(form data)가 서버로 제출될 때 입력된 텍스트의 줄바꿈(wrap) 방식을 명시함.
                  */}
                </td>
              </tr>
              {/* btnSet */}
              <tr>
                <th colSpan='3'>
                  <button onClick={() => navigate(-1)}>이전페이지 가기</button>
                  <input type='reset' value='초기화' onClick={resetForm} />
                  <input type='submit' value='전송' />
                </th>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </form>
    </>
  )
}

export default Input
