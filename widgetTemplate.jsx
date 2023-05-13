import React, { useState, useEffect, useRef } from 'react';

export const _tempName_ = function _tempName_({
    id,
    width,
    height,
    component,
    darkMode,
    currentState,
    onComponentOptionChanged,
    onComponentOptionsChanged,
    setExposedVariable,
    onEvent,
    canvasWidth,
    registerAction,
    properties,
    styles,
    fireEvent,
}) {
    const [visibility, setVisibility] = useState(styles.visibility);
    const [disabledState, setDisabledState] = useState(styles.disabledState);

    var inputRef = useRef(null)
    const [value1, setValue1] = useState(properties.value1);
    const [value2, setValue2] = useState(properties.value2);
    const [value3, setValue3] = useState(properties.value3);
    const [value4, setValue4] = useState(properties.value4);
    const [color, setColor] = useState(styles.color);

    useEffect(() => {
        setValue1(properties.value1)
    }, [properties.value1])
    useEffect(() => {
        setValue2(properties.value2)
    }, [properties.value2])
    useEffect(() => {
        setValue3(properties.value3)
    }, [properties.value3])
    useEffect(() => {
        setValue4(properties.value4)
    }, [properties.value4])
    useEffect(() => {
        setVisibility(styles.visibility)
        setDisabledState(styles.disabledState)
    }, [styles.visibility, styles.disabledState])
    useEffect(() => {
        setColor(styles.color)
    }, [styles.color])

    // 处理点击事件
    const handleClick = () => {
        // 触发事件
        fireEvent('onClick');
    }
    // 处理输入事件
    const [inputValue, setInputValue] = useState("");
    const HandleInputChange = (e) => {
        setInputValue(inputRef.current.value)
    }

    // 注册自定义事件
    const [count, setCount] = useState(0);
    registerAction(
        'callme',
        async function (num) {
            console.log('传入参数：'+num)
            setExposedVariable('value5',count + 1)
            setCount(count + 1)
        },
        [count]
    );


    return (<div data-disabled={disabledState} style={{ width: width - 5, height, display: visibility ? '' : 'none' }}>
        <div className='signatureContainer'
            style={{ 'background-color': darkMode ? '#2b3546' : color }}
            onClick={handleClick}
        >
            我是新组件<br></br>
            使用其他组件调用增加计数：{count}<br></br>
            value1:<br></br>
            <ui>
                {value1.map((v) => (<li>{v.title}</li>))}
            </ui>
            value2:{value2.toString()}<br></br>
            value3:{value3.toString()}<br></br>
            value4:{value4.toString()}<br></br>
            ref示例:
            <input type="text" ref={inputRef} onChange={HandleInputChange} /><br></br>
            输入框内容：{inputValue}
        </div>
    </div>)
}