import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface ImpexScriptState {
    value: ImpexScriptObject;
    status: 'idle' | 'loading' | 'failed';
}

export interface ImpexScriptObject {
    title: string[];
    variables: string[];
    impexUnits: ImpexUnit[];
    others: string[];
    original: string;
}

export interface ImpexUnit {
    order: string;
    title: string[];
    fields: Field[][];
}

export interface Field {
    key: string;
    value: string;
}

const initialState: ImpexScriptState = {
    value: {} as ImpexScriptObject,
    status: 'idle',
};

export const impexScriptSlice = createSlice({
    name: 'impexScript',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchDataAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value = action.payload;
            })
            .addCase(fetchDataAsync.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const fetchDataAsync = createAsyncThunk(
    'impexScript/fetchData',
    async (fileName: string = 'supplierLandingPage') => {
        const url = `./${fileName}.impex`;
        let response = await fetch(url);
        let text = await response.text();
        let impexScriptObject: ImpexScriptObject = {} as ImpexScriptObject;
        impexScriptObject.title = [] as string[];
        impexScriptObject.variables = [] as string[];
        impexScriptObject.impexUnits = [] as ImpexUnit[];
        impexScriptObject.others = [] as string[];
        console.clear();
        let temp0Title = [] as string[];
        for (let [index1, value1] of text.split(/INSERT_UPDATE|UPDATE/).entries()) {
            let impexUnit = {} as ImpexUnit;
            impexUnit.order = 'INSERT_UPDATE'; // 想不到方法抓
            impexUnit.fields = [] as Field[][];
            let tempTitle = [] as string[];
            index1 !== 0 ? impexUnit.title = tempTitle : impexUnit.title = temp0Title;
            let tempKeys = [] as string[];
            let value1s = value1.split('\r\n');
            for (let [index2, value2] of value1s.entries()) {
                value2 = value2.trim();
                if (value2 === '') {
                    continue;
                } else if (index1 === 0) {
                    if (value2.indexOf('$') !== -1) {
                        impexScriptObject.variables.push(value2);
                    } else if (value2.substring(0, 1).indexOf('#') !== -1 && index2 !== (value1s.length - 2)) {
                        impexScriptObject.title.push(value2);
                    } else if (index2 === (value1s.length - 2)) {
                        temp0Title.push(value2);
                    }
                }
                else if (index1 !== 0) {
                    if (value2.substring(0, 1).indexOf('#') !== -1) {
                        tempTitle.push(value2);
                    } else if (value2.substring(0, 1).indexOf(';') !== -1) {
                        let fields = [] as Field[];
                        for (const [index3, value3] of value2.split(';').entries()) {
                            let field = {} as Field;
                            field.key = tempKeys[index3] ? tempKeys[index3].trim() : tempKeys[index3];
                            field.value = value3 ? value3.trim() : value3;
                            fields.push(field);
                        }
                        impexUnit.fields.push(fields);
                    } else {
                        tempKeys = value2.split(';');
                        // impexScriptObject.others.push(value2);
                    }
                }
            }
            if (index1 !== 0) {
                impexScriptObject.impexUnits.push(impexUnit);
            }
        }
        console.log('impexScriptObject', impexScriptObject);
        impexScriptObject.original = text.split('\r\n').join('<br/>');
        return impexScriptObject;
    }
);

export const selectfetchData = (state: RootState) => state.impexScript.value;

export default impexScriptSlice.reducer;