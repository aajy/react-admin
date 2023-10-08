import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

function Input() {
  const navigate = useNavigate();
  const stateList = useLocation().state;
  const [IsGoBack, setIsGoBack] = useState(false)
  const IsModify = useRef(false)
  let initVal = useRef({ // useRef 를 써서 데이터가 변경될 때 마다 실시간 감지를 할 수있음. useState는 재랜더링 시에 감지.
    title:"",
    text:"",
    condition:"normal"
  });
  const pageCondition = useLocation().pathname.split('/')[2];
  const [Val, setVal] = useState(initVal.current);
  const [ListCondition, setListCondition] = useState("normal")
  
  useEffect(()=>{
    if(stateList) {
      setVal(stateList);
      initVal.current = stateList;
      setListCondition(stateList?.condition)
    } else {
      return
    }
  },[stateList])

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValues = { ...Val, [name]: value };
    setVal(newValues);
  
    IsModify.current = JSON.stringify(newValues) !== JSON.stringify(initVal.current);
  };
  
  const handleClickRadioButton = (e) => {
    const updatedCondition = e.target.value;
    setListCondition(updatedCondition);
    const newValues = { ...Val, condition: updatedCondition };
    setVal(newValues);
  
    IsModify.current = JSON.stringify(newValues) !== JSON.stringify(initVal.current);
  };

  const resetForm = () => {
		setVal({ ...initVal });
	};

  const handleSubmit = (e) => {
		e.preventDefault();
    IsModify.current = JSON.stringify(Val)!==JSON.stringify(initVal.current)
    if(!IsGoBack) {
      if(pageCondition === "insert") {
        console.log('등록요청');
        fetch('http://localhost:3001/info', {
          method: 'POST',
          headers : {
            'Content-Type':'application/json',
          },
          body : JSON.stringify({...Val}),
        })
        .then(res => {
          if (res.ok) {
            if(!alert("등록되었습니다.")) navigate(-1);
          }
        }).catch((error)=>{
          console.log(error);
        }
        )
      } else {
        console.log("수정요청");
        fetch(`http://localhost:3001/info/${Val.id}`, {
          method: 'PUT',
          headers : {
            'Content-Type':'application/json',
          },
          body : JSON.stringify({...Val}),
        })
        .then(res => {
          if (res.ok) {
            if(!alert("수정되었습니다.")) navigate(-1); //alert창 확인 누르면 뒤로가기.
          }
        })
      }
    } else {
      console.log('그냥 뒤로가기');
      return;
    }
	};
  return (
    <div className='page'>
      {/* 제목 내용 전송 폼 */}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend className='h'>공지사항</legend>
          <table border='1'>
            <tbody>
              {/* 일반/중요 공지사항 선택 */}
              <tr>
                <th scope='row'>
                  <label htmlFor='title'>종류</label>
                </th>
                <td>
                  <label>
                    <input
                      type="radio"
                      value="normal"
                      checked={ListCondition === "normal"}
                      onChange={handleClickRadioButton}
                    />
                    일반
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="import"
                      checked={ListCondition === "import"}
                      onChange={handleClickRadioButton}
                    />
                    중요
                  </label>
                </td>
              </tr>
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
                    value={Val?.title}
                    onChange={handleChange}
                    required
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
                    value={Val?.text}
                    onChange={handleChange}
                    wrap = "true"
                    required
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
                  <button type="button" onClick={()=>{
                    navigate(-1);
                    setIsGoBack(true)
                    }}>이전페이지 가기</button>
                  <input type='reset' value='초기화' onClick={resetForm} />
                  <input type='submit' disabled={!IsModify.current} value={pageCondition === 'insert'? "등록":"수정"} />
                  {/* <input type='submit' value={pageCondition === 'insert'? "등록":"수정"} /> */}
                </th>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </form>
    </div>
  )
}

export default Input
