import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Input() {
  const navigate = useNavigate();
  const initVal = {
    userid:'',
    pwd:'',
  }
  const [Val, setVal] = useState(initVal);
  
  const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...Val, [name]: value });
	};

  const handleSubmit = (e, data,url) => {
		e.preventDefault();
    const form = document.createElement('form'); // form 태그 생성
    form.setAttribute('method', 'get'); // 전송 방식 결정 (get or post)
    form.setAttribute('action', url); // 전송할 url 지정
	};

  const resetForm = () => {
		setVal(initVal);
	};
  return (
    <>
      <button onClick={() => navigate(-1)}>이전페이지 가기</button>
      <form onSubmit={handleSubmit}>
      <fieldset>
        <legend className='h'>로그인 로그</legend>
        <table border='1'>
          <tbody>
            {/* userid */}
            <tr>
              <th scope='row'>
                <label htmlFor='userid'>USER ID</label>
              </th>
              <td>
                <input
                  type='text'
                  name='userid'
                  placeholder='아이디를 입력하세요'
                  value={Val.userid}
                  onChange={handleChange}
                />
              </td>
            </tr>
      
            {/* password */}
            <tr>
              <th>
                <label htmlFor='pwd'>PASSWORD</label>
              </th>
              <td>
                <input
                  type='password'
                  name='pwd'
                  placeholder='비밀번호를 입력하세요'
                  value={Val.pwd}
                  onChange={handleChange}
                />
              </td>
            </tr>
            {/* btnSet */}
            <tr>
              <th colSpan='2'>
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
