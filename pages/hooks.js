import React, {useState, useReducer, useEffect, useLayoutEffect, useContext, useRef} from 'react'
import MyContext from './test/my-context'

// class MyCount extends React.Component {
//   constructor() {
//     super()
//     this.ref = React.createRef()
//   }
//   state = {
//     count: 0
//   }

//   componentDidMount() {
//     this.ref.current
//     this.interval = setInterval(() => {
//       this.setState({
//         count: this.state.count +1
//       })
//     }, 1000)
//   }

//   componentWillUnmount() {
//     if (this.interval) {
//       clearInterval(this.interval)
//     }
//   }

//   render() {
//     return <span ref={this.ref}>{this.state.count}</span>
//   }
// }

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
  // const [count, setCount] = useState(0) // 用useState更新值
  const [count, dispatchCount] = useReducer(countReducer, 0)
  const [name, setName] = useState('qifa')

  const context = useContext(MyContext)

  const inputRef = useRef()

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // setCount(c => c + 1)
  //     dispatchCount({type: 'minus'})
  //   }, 1000)

  //   return () => clearInterval(interval)
  // }, [])

  // 会在count更新后，dom真正渲染到html之后调用
  useEffect(() => {
    console.log('effect invoked')
    console.log(inputRef)
    return () => console.log('effect detached')
  }, [count])

  // 会在count更新后，dom没有真正渲染到html之前调用
  useLayoutEffect(() => {
    console.log('layouteffect invoked')
    return () => console.log('layouteffect detached')
  }, [count])
  // 状态更新，方法就会重新渲染，如果没传[]，useEffect就会重新执行（就会先detached，后invoked）
  // 如果传入的数组里dependence依赖变化了，就会执行useEffect
  return (
    <div>
      <input ref={inputRef} type="text" value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={() => dispatchCount({type: 'add'})}></button>
      <p>{context}</p>
    </div>
  )
}
export default MyCountFunc
