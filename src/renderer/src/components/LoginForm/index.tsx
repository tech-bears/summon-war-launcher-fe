/*
 * @Author: hypocrisy
 * @Date: 2024-03-11 22:05:55
 * @LastEditors: hypocrisy
 * @LastEditTime: 2024-03-12 00:01:07
 * @FilePath: /summon-war-launcher-fe/src/renderer/src/components/LoginForm/index.tsx
 */
import { useRequest } from 'ahooks'
import { APostNormal } from '@renderer/services/user'
import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useStores } from '@renderer/store'
import styles from './style/index.module.styl'
const LoginForm: React.FC = () => {
  const { userStore } = useStores()
  const { setUserInfo } = userStore
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { run } = useRequest(APostNormal, {
    manual: true,
    onSuccess(res) {
      setUserInfo(username, res.session)
    }
  })
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
      <button
        className={styles.login_btn}
        onClick={() => {
          run({
            account: +username,
            password
          })
        }}
      >
        登&nbsp;&nbsp;&nbsp;录
      </button>
    </div>
  )
}
export default observer(LoginForm)
