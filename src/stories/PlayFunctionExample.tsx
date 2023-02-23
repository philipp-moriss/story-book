import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import './PlayFunctionExample.css'


type PlayFunctionExampleProps = {
    placeholder: string,
    borderColor: string
}

const PlayFunctionExample : React.FC<PlayFunctionExampleProps> = ({placeholder, borderColor}) => {

    const [value, setValue] = useState<string>('')

    const [enterValue, setEnterValue] = useState<null | string>(null)

    const onChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }

    const onEnterClickHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.code === "Enter" && event.charCode === 13) {
            setEnterValue(value)
        }
    }

    return (
        <div>
            <input className={'input--primary'}
                   style={borderColor ? {borderColor: borderColor} : {}}
                   value={value}
                   data-testid={'input'}
                   placeholder={placeholder ? placeholder : 'Enter text...'}
                   onKeyPress={onEnterClickHandler}
                   onChange={onChangeHandler}/>


            {
                enterValue && <div className={'result-value'}>{enterValue}</div>
            }
        </div>
    );
};

export default PlayFunctionExample;
