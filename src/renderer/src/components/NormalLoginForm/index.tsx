/*
 * @Author: hypocrisy
 * @Date: 2024-03-11 22:05:55
 * @LastEditors: hypocrisy
 * @LastEditTime: 2024-03-12 14:50:07
 * @FilePath: \summon-war-launcher-fe\src\renderer\src\components\NormalLoginForm\index.tsx
 */
import { useRequest } from 'ahooks'
import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useStores } from '@renderer/store'
import styles from './style/index.module.styl'
import Captcha from '@renderer/components/Captcha'
const NormalLoginForm: React.FC = () => {
  const { userStore } = useStores()
  const { setUserByPassword } = userStore
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  useEffect(() => {
    setUserByPassword(username, password)
  }, [username, password])
  return (
    <div className="flex flex-col">
      <input
        type="text"
        placeholder="请输入账号"
        className={styles.username}
        value={username}
        onChange={(e) => {
          //如果不是数字则不允许输入
          if (isNaN(+e.target.value)) {
            return
          }
          setUsername(e.target.value)
        }}
      />
      <input
        type="password"
        placeholder="请输入密码"
        className={styles.password}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
      />
    </div>
  )
}
export default observer(NormalLoginForm)
