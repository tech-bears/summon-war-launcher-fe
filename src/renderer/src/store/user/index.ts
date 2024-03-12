/*
 * @Author: hypocrisy
 * @Date: 2024-03-09 23:58:48
 * @LastEditors: hypocrisy
 * @LastEditTime: 2024-03-12 14:56:23
 * @FilePath: \summon-war-launcher-fe\src\renderer\src\store\user\index.ts
 */
import { makeAutoObservable, runInAction } from 'mobx'
import { APostNormal } from '@renderer/service/user'

class User {
  constructor() {
    makeAutoObservable(this)
  }
  userAccount = ''
  userPassword = ''
  userPhone = ''
  userCode = ''
  userSession = ''
  verify = false
  setUserByPhone = (phone: string, code: string) => {
    this.userPhone = phone
    this.userCode = code
  }
  setUserByPassword = (account: string, password: string) => {
    this.userAccount = account
    this.userPassword = password
  }
  // setVerify = (verify: boolean) => {
  //   this.verify = verify
  // }
  normalLogin = async () => {
    try {
      const res = await APostNormal({
        account: +this.userAccount,
        password: this.userPassword
      })
      runInAction(() => {
        this.userSession = res.session
      })
    } catch (error: any) {
      this.verify = error.needVerify
    }
  }
}
export const userStore = new User()
