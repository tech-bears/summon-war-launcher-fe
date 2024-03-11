/*
 * @Author: hypocrisy
 * @Date: 2024-03-11 17:16:54
 * @LastEditors: hypocrisy
 * @LastEditTime: 2024-03-11 17:17:05
 * @FilePath: \summon-war-launcher-fe\src\renderer\src\components\SuspenseLazy\index.tsx
 */
import React, { Suspense, lazy } from 'react'

const SuspenseLazy = (props: any) => {
  return (
    <Suspense fallback={<></>}>{React.createElement(lazy(props))}</Suspense>
  )
}

export default SuspenseLazy
