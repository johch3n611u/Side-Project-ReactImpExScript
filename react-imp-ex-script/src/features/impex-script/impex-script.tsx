import { fetchDataAsync } from './impexScriptSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectfetchData } from './impexScriptSlice';
import { useState, useEffect } from 'react';

const ImpexScript = () => {

    const dispatch = useAppDispatch();
    const fetchData = useAppSelector(selectfetchData);

    // https://stackoverflow.com/questions/62336340/cannot-update-a-component-while-rendering-a-different-component-warning
    useEffect(() => {
        console.log('useEffect');
        dispatch(fetchDataAsync('cmsResponsive'));
    }, []);

    const changeFetchFile = (fileName: string) => dispatch(fetchDataAsync(fileName));

    return (
        <div>
            <nav className="Nav">
                <span onClick={() => changeFetchFile('supplierLandingPage')}>supplierLandingPage</span> / <span onClick={() => changeFetchFile('cmsResponsive')}>cmsResponsive</span>
            </nav>
            <table>
                {fetchData.impexUnits?.map((impexUnit,impexUnitIndex) => (
                    <>
                        <tr>
                            <td colSpan={3} key={impexUnitIndex}>{impexUnit.title}</td>
                        </tr>
                        <tr>
                            {
                                impexUnit.fields[0]?.map((field,fieldIndex)=><th key={fieldIndex}>{field.key}</th>)
                            }
                        </tr>
                        <tr>
                            <td>Emil</td>
                            <td>Tobias</td>
                            <td>Linus</td>
                        </tr>
                        <tr>
                            <td>Emil</td>
                            <td>Tobias</td>
                            <td>Tobias</td>
                        </tr>
                    </>
                ))}
            </table>
            <details dangerouslySetInnerHTML={{ __html: fetchData?.original }}></details>
        </div>

    );
};

export default ImpexScript;