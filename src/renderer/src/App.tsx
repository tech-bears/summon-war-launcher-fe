import React from 'react'
import styles from './index.module.less'
import { APostRegister } from '@renderer/services/user/services'
const App: React.FC = () => {
  APostRegister({
    phone_number: '123456789',
    password: '123456',
    code: '123456',
    phone_prefix: '86'
  }).then((res) => {
    console.log()
  })
  return (
    <div>
      <h1 className={styles.app}>Hello, Electron!</h1>
      <h1 className={'.app'}>Hello, Electron!</h1>
    </div>
  )
}
export default App
