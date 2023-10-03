import { useCallback, useRef, useState } from 'react';
import * as XLSX from 'xlsx';

function Dashboard() {
  const inputRef = useRef(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [InputMessage, setInputMessage] = useState('파일을 업로드하세요.');

  const handleDrop = useCallback(async (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        if (!getExtensionOfFileName(acceptedFiles[0])) {
          setInputMessage('xlsx 파일만 가능합니다.');
          // TODO :: alert 추가 후 reset실행
        } else {
          setInputMessage('업로드 되었습니다.');
          const file = acceptedFiles[0];    
          console.log('file: ', file);
          const reader = new FileReader();
          reader.onload = async (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: "array", bookVBA: true });
    
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(sheet);
    
            setUploadedFile({ file, jsonData });
          };
    
          reader.readAsArrayBuffer(file);
        }
      } else {
        setInputMessage('파일을 업로드하세요.')
      }
  }, []);
  const getExtensionOfFileName = (file) => {
    const fileName = file.name;
    const _lastDot = fileName.lastIndexOf('.');
    const _fileExt = fileName.substring(_lastDot, fileName.length).toLowerCase();

    let result = (_fileExt === '.xlsx') ? true : false;
    return result;
  }

  const clear = () => {
    if(uploadedFile.file) {
      setUploadedFile(null);
      inputRef.current.value = "";
      setInputMessage('파일을 업로드하세요.')
    }
  }
  const excelDownload = (uploadedFile) => {
    const excelFileName = `${uploadedFile.file.name}다운로드.xlsx`;
  
    const ws = XLSX.utils.json_to_sheet(uploadedFile.jsonData); 
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
    XLSX.writeFile(wb, excelFileName);
  };

  return (
    <div>
      대시보드 페이지 입니다.
      <div className='upload'>
        <h2>Excel 파일 업로드</h2>
        <input
          ref={inputRef}
          type="file"
          accept=".xlsx, .xls, .csv"
          onChange={(e) => handleDrop(e.target.files)}
        />
        <p>{InputMessage}</p>
        <div>
          {uploadedFile &&( 
            <div>
              <p>{uploadedFile?.file.name}</p>
              <button onClick={() => clear()}>삭제</button>
              <button onClick={clear}>이름변경</button>
            </div>)
          }
        </div>
      </div>
      <div className='download'>
        <h2>Excel 파일 다운로드</h2>
        <button onClick={()=>excelDownload(uploadedFile)}>파일 다운로드</button>
      </div>
    </div>
  )
}

export default Dashboard
