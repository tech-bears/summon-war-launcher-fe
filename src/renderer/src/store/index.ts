/*
 * @Author: hypocrisy
 * @Date: 2024-03-09 23:43:08
 * @LastEditors: hypocrisy
 * @LastEditTime: 2024-03-09 23:58:00
 * @FilePath: /summon-war-launcher-fe/src/renderer/src/store/index.ts
 */
import * as React from 'react'
import {configure} from 'mobx'
import {userStore} from './user'

configure({enforceActions: 'always'}) // 任何状态都能只能通过actions来修改，在实际开发中也包括新建状态。

export const stores = {userStore}

export const storesContext = React.createContext(stores)

export const useStores = () => React.useContext(storesContext)

export const StoresProvider = storesContext.Provider
