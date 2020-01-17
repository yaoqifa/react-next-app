import { Button } from 'antd' // 按需加载
import '../test.css'
import Hooks from './test/hooks-optimize'
import MyContext from './test/my-context'
import { useState } from 'react'

function Main() {
  const [value, setValue] = useState('test')

  return (
    <>
      <MyContext.Provider value={value}>
        <Hooks />
        <button onClick={() => setValue(v => v + 't')}></button>
      </MyContext.Provider>
    </>
  )
}

export default Main