/*
 * @Author: hypocrisy
 * @Date: 2024-03-09 23:58:48
 * @LastEditors: hypocrisy
 * @LastEditTime: 2024-03-11 23:49:46
 * @FilePath: /summon-war-launcher-fe/src/renderer/src/store/user/index.ts
 */
import { makeAutoObservable, runInAction } from 'mobx'
import { useRequest } from 'ahooks'
import { APostNormal } from '@renderer/services/user'
// const { runAsync: runPostNormalLogin, loading } = useRequest(APostNormal, {
//   manual: true
// })
class User {
  constructor() {
    makeAutoObservable(this)
  }
  userAccount = ''
  userSession = ''
  setUserInfo(account: string, session: string) {
    this.userAccount = account
    this.userSession = session
  }
}
export const userStore = new User()
