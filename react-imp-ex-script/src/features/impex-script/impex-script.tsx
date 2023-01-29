import { fetchDataAsync } from './impexScriptSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectfetchData } from './impexScriptSlice';
import { useState, useEffect } from 'react';

const ImpexScript = () => {

    const dispatch = useAppDispatch();

    // https://stackoverflow.com/questions/62336340/cannot-update-a-component-while-rendering-a-different-component-warning
    useEffect(() => {
        console.log('useEffect');
        dispatch(fetchDataAsync('cmsResponsive'));
    }, []);

    const fetchData = useAppSelector(selectfetchData);

    const changeFetchFile = (fileName: string) => dispatch(fetchDataAsync(fileName));

    return (
        <div>
            <nav className="Nav">
                <span onClick={()=>changeFetchFile('supplierLandingPage')}>supplierLandingPage</span> / <span onClick={()=>changeFetchFile('cmsResponsive')}>cmsResponsive</span>
            </nav>
            <details dangerouslySetInnerHTML={{ __html: fetchData?.original }}></details>
        </div>

    );
};

export default ImpexScript;