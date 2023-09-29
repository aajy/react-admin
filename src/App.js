import { Route, Routes } from 'react-router-dom';

import Main from './components/main/Main';
import Header from './components/common/Header';
// import Footer from './components/common/Footer';
import Menu from './components/common/Menu';

import './scss/style.scss';

import Dashboard from './components/sub/dashboard/Dashboard';
import Notice from './components/sub/notice/Notice';
import Input from './components/sub/notice/Input';

function App() {
  return (
    <>
      <Header />
			<Menu/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/notice' element={<Notice />}/>
        <Route path='/notice/insert' element={<Input />}/>
        <Route path='/notice/modify' element={<Input />}/>
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
