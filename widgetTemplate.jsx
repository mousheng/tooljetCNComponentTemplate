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
    onEvent,
    canvasWidth,
    registerAction,
    properties,
    styles,
    fireEvent,
}) {
    // const [isBegin, setIsBegin] = useState(false);
    // const [tipText, setTipText] = useState(properties.tipText);
    // const [showUndo, setShowUndo] = useState(properties.showUndo);
    // const [showClean, setShowClean] = useState(properties.showClean);
    // const [penColor, setPenColor] = useState(properties.penColor);
    const [visibility, setVisibility] = useState(styles.visibility);
    const [disabledState, setDisabledState] = useState(styles.disabledState);

    // useEffect(() => {
    //     setTipText(properties.tipText)
    // }, [properties.tipText])
    // useEffect(() => {
    //     setShowUndo(properties.showUndo)
    // }, [properties.showUndo])
    // useEffect(() => {
    //     setShowClean(properties.showClean)
    // }, [properties.showClean])
    // useEffect(() => {
    //     setPenColor(properties.penColor)
    // }, [properties.penColor])
    // useEffect(() => {
    //     setVisibility(styles.visibility)
    // }, [styles.visibility])
    // useEffect(() => {
    //     setDisabledState(styles.disabledState)
    // }, [styles.disabledState])

    return (<div data-disabled={disabledState} style={{ width: width - 5, height, display: visibility ? '' : 'none' }}>
        <div className='signatureContainer' style={{'background-color': darkMode ? '#2b3546' : '#fff' }}>
          我是新组件
        </div>
    </div>)
}