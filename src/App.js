import { Route, Routes } from 'react-router-dom';



import Main from './components/main/Main';
import Header from './components/common/Header';
// import Footer from './components/common/Footer';
import Menu from './components/common/Menu';

import './scss/style.scss';

import Table from './components/sub/Table';
import Input from './components/sub/Input';

function App() {
  return (
    <>
      <Header />
			<Menu/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/table' element={<Table />}/>
        <Route path='/input' element={<Input />}/>
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
