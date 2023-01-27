import React from 'react';
import ReduxExample from './pages/redux-example';
import { useDispatch, useSelector } from 'react-redux';
import { selectDisplayPage, changePage } from './pages/pageSlice';

function App() {

  const dispatch = useDispatch();
  const displayPage = useSelector(selectDisplayPage);

  return (
    <div className="App">
      <div className="Nav">
        <span onClick={() => dispatch(changePage('ImpExScript'))}>ImpExScript</span>
        /
        <span onClick={() => dispatch(changePage('ReduxExample'))}>ReduxExample</span>
      </div>
      <main>
        {/* 因為不需要到 Router 直接條件渲染呈現組件 => && 左側若是 true 則返回右側 */}
        {displayPage === 'ImpExScript' && (
          <p>ImpExScript test</p>
        )}
        {displayPage === 'ReduxExample' && <ReduxExample />}
      </main>
    </div>
  );
}

export default App;
