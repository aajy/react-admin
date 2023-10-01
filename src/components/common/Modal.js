import { forwardRef, useImperativeHandle, useState } from 'react';
const Modal = forwardRef((props, ref) => { //forwardRef는 two parameters:props and ref
  const [Open, setOpen] = useState(false);
  useImperativeHandle(ref, () => {
		return { open: () => setOpen(true) };
	});
  const setFetch = () => {
    props.getFetch(); //부모 함수실행
  }
	return (
		<>
      {Open && (<div className='modal' ref={ref}>
        <div className='con'>{props.children}</div>
        
        <span className='close true' onClick={()=>setFetch()}>확인</span>
        <span className='close' onClick={()=>setOpen(false)}>close</span>
      </div>)}
    </>
	);
});

export default Modal;