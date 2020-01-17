import React, {useState, useReducer, useEffect, useLayoutEffect, useContext, useRef, memo, useMemo, useCallback} from 'react'
import MyContext from './my-context'


function countReducer(state, action) {
  // 用reducer更新对象
  switch(action.type) {
    case 'add':
      return state + 1
    case 'minus':
      return state - 1
    default:
      return state
  }
}

function MyCountFunc() {
  const [count, dispatchCount] = useReducer(countReducer, 0)
  const [name, setName] = useState('qifa')
  const config = useMemo(() => ({
    text: `count is ${count}`,
    color: count > 3 ? 'red' : 'blue'
  }), [count])

  const countRef = useRef() //每次返回同一个对象
  countRef.current = count

  const handleButtonClick = useCallback(() => dispatchCount({ type: 'add'}), [])

  // 闭包问题
  const handleAlertClick = () => setTimeout(() => { alert(countRef.current)}, 2000)

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      <Child
        config={config}
        onButtonClick={handleButtonClick}
      />
      <button onClick={handleAlertClick}>alert count click</button>
    </div>
  )
}

const Child = memo(function Child({ config, onButtonClick }) {
  console.log('child render')
  return (
    <button onClick={onButtonClick} style={{color: config.color}}>
      {config.text}
    </button>
  )
})
export default MyCountFunc
