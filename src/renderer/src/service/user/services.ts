/** Tip: 需要手动引入 request 函数 */
import request from '@renderer/utils/request'

/**
** 接口名称: 普通登录
** 接口地址: /user/auth/login/normal
** 请求方式: post
** 接口描述: 用户账号密码登录

*/
export const APostNormal = (
  params: Api.Paths.APostNormal.Request,
  headers: Api.Paths.APostNormal.Headers
) => {
  return request<Promise<Api.Paths.APostNormal.Response>>({
    url: `/user/auth/login/normal`,
    method: 'POST',
    data: params,
    headers
  })
}

/**
 ** 接口名称: 手机号登录
 ** 接口地址: /user/auth/login/phone
 ** 请求方式: post
 ** 接口描述: 用户手机号登录
 */
export const APostPhone = (
  params: Api.Paths.APostPhone.Request,
  headers: Api.Paths.APostPhone.Headers
) => {
  return request<Promise<Api.Paths.APostPhone.Response>>({
    url: `/user/auth/login/phone`,
    method: 'POST',
    data: params,
    headers
  })
}

/**
 ** 接口名称: 注册
 ** 接口地址: /user/auth/register
 ** 请求方式: post
 ** 接口描述: 用户注册
 */
export const APostRegister = (
  params: Api.Paths.APostRegister.Request,
  headers: Api.Paths.APostRegister.Headers
) => {
  return request<Promise<Api.Paths.APostRegister.Response>>({
    url: `/user/auth/register`,
    method: 'POST',
    data: params,
    headers
  })
}

/**
 ** 接口名称: 重置密码
 ** 接口地址: /user/auth/reset/password
 ** 请求方式: post
 ** 接口描述: 用户重置密码
 */
export const APostPassword = (
  params: Api.Paths.APostPassword.Request,
  headers: Api.Paths.APostPassword.Headers
) => {
  return request<Promise<Api.Paths.APostPassword.Response>>({
    url: `/user/auth/reset/password`,
    method: 'POST',
    data: params,
    headers
  })
}

/**
 ** 接口名称: 用户基础信息
 ** 接口地址: /user/info
 ** 请求方式: get
 ** 接口描述: 获取用户个人信息
 */
export const AGetInfo = (
  params: Api.Paths.AGetInfo.Request,
  headers: Api.Paths.AGetInfo.Headers
) => {
  return request<Promise<Api.Paths.AGetInfo.Response>>({
    url: `/user/info`,
    method: 'GET',
    params,
    headers
  })
}

/**
 ** 接口名称: 修改头像
 ** 接口地址: /user/info/update/avatar
 ** 请求方式: post
 ** 接口描述: 修改用户头像
 */
export const APostAvatar = (
  params: Api.Paths.APostAvatar.Request,
  headers: Api.Paths.APostAvatar.Headers
) => {
  return request<Promise<Api.Paths.APostAvatar.Response>>({
    url: `/user/info/update/avatar`,
    method: 'POST',
    data: params,
    headers
  })
}

/**
 ** 接口名称: 修改昵称
 ** 接口地址: /user/info/update/name
 ** 请求方式: post
 ** 接口描述: 修改用户昵称
 */
export const APostName = (
  params: Api.Paths.APostName.Request,
  headers: Api.Paths.APostName.Headers
) => {
  return request<Promise<Api.Paths.APostName.Response>>({
    url: `/user/info/update/name`,
    method: 'POST',
    data: params,
    headers
  })
}

/**
 ** 接口名称: 发送短信验证码
 ** 接口地址: /system/phone/send
 ** 请求方式: post
 ** 接口描述:
 */
export const APostSend = (
  params: Api.Paths.APostSend.Request,
  headers: Api.Paths.APostSend.Headers
) => {
  return request<Promise<Api.Paths.APostSend.Response>>({
    url: `/system/phone/send`,
    method: 'POST',
    data: params,
    headers
  })
}
