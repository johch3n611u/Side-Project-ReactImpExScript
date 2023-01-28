import React from 'react';
import { Counter } from './features/counter/Counter';
import ImpexScript from './features/impex-script/impex-script';
import { useDispatch, useSelector } from 'react-redux';
import { selectDisplayFeatures, changeFeatures } from './features/featuresSlice';

function App() {

  const dispatch = useDispatch();
  const displayPage = useSelector(selectDisplayFeatures);

  return (
    <div className="App">
        <div className="Nav">
        <span onClick={() => dispatch(changeFeatures('ImpExScript'))}>ImpExScript</span>
        /
        <span onClick={() => dispatch(changeFeatures('ReduxExample'))}>ReduxExample</span>
      </div>
      <main>
        {/* 因為不需要到 Router 直接條件渲染呈現組件 => && 左側若是 true 則返回右側 */}
        {displayPage === 'ImpExScript' && <ImpexScript />}
        {displayPage === 'ReduxExample' && <Counter />}
      </main>
    </div>
  );
}

export default App;
