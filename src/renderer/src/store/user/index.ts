/*
 * @Author: hypocrisy
 * @Date: 2024-03-09 23:58:48
 * @LastEditors: hypocrisy
 * @LastEditTime: 2024-03-10 15:08:38
 * @FilePath: /summon-war-launcher-fe/src/renderer/src/store/user/index.ts
 */
import { makeAutoObservable, runInAction } from 'mobx'
import { APostRegister,AGetInfo } from '@renderer/services/user'

class User {
  constructor() {
    makeAutoObservable(this)
  }
  userID = ''

}
export const userStore = new User()
