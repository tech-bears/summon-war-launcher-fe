/*
 * @Author: hypocrisy
 * @Date: 2024-03-11 22:05:55
 * @LastEditors: hypocrisy
 * @LastEditTime: 2024-03-12 18:16:02
 * @FilePath: \summon-war-launcher-fe\src\renderer\src\components\PhoneLoginForm\index.tsx
 */
import { useRequest } from 'ahooks'

import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useStores } from '@renderer/store'
import styles from './style/index.module.styl'
const LoginForm: React.FC = () => {
  const { userStore } = useStores()
  const { setUserByPhone } = userStore
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  useEffect(() => {
    setUserByPhone(phone, code)
  }, [phone, code])

  return (
    <div className="flex flex-col">
      <input
        type="text"
        placeholder="请输入手机号"
        className={styles.phone}
        value={phone}
        onChange={(e) => {
          //如果不是数字则不允许输入
          if (isNaN(+e.target.value)) {
            return
          }
          setPhone(e.target.value)
        }}
      />
      <div>
        <input
          type="text"
          placeholder="请输入验证码"
          className={styles.code}
          value={code}
          onChange={(e) => {
            setCode(e.target.value)
          }}
        />
        <span className={styles.get_code}>获取验证码</span>
      </div>
    </div>
  )
}
export default observer(LoginForm)
