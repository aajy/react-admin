import { forwardRef, useImperativeHandle, useState } from 'react';
const Modal = forwardRef((props, ref) => {
  const [Open, setOpen] = useState(false);
  useImperativeHandle(ref, () => {
		return { open: () => setOpen(true) };
	});
	return (
		<>
      {Open && (<div className='modal' ref={ref}>
        <div className='con'>{props.children}</div>
        <span className='close' onClick={()=>setOpen(false)}>close</span>
      </div>)}
    </>
	);
});

export default Modal;