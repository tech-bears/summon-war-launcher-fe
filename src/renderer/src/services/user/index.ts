
/** Tip: 需要手动引入 request 函数 */
import request from '@renderer/utils/request'


  /**
   ** 接口名称: 普通登录
   ** 请求方式: post
   ** 接口地址: /user/auth/login/normal
   ** 接口描述: 用户账号密码登录

   ** 请求头:
   ** X-CAPTCHA-TICKET: string
    ** Content-Type: application/json
   ** 请求参数:
   ** account: number 用户账号
    ** password: string 密码

   ** 响应字段:
   ** session: string 密钥串

   */
export const APostNormal = (params: Api.Paths.APostNormal.Request,headers?: Api.Paths.APostNormal.Headers) => {
  return request<Api.Paths.APostNormal.Response>({
    url: '/user/auth/login/normal',
    method: 'POST',
    data: params,
    headers
  })
}

  /**
   ** 接口名称: 手机号登录
   ** 请求方式: post
   ** 接口地址: /user/auth/login/phone
   ** 接口描述: 用户手机号登录
   ** 请求头:
   ** X-CAPTCHA-TICKET: string
    ** Content-Type: application/json
   ** 请求参数:
   ** phone_number: string 手机号
    ** code: string 验证码
    ** phone_prefix: string 手机前缀

   ** 响应字段:
   ** session: string 密钥串

   */
export const APostPhone = (params: Api.Paths.APostPhone.Request,headers?: Api.Paths.APostPhone.Headers) => {
  return request<Api.Paths.APostPhone.Response>({
    url: '/user/auth/login/phone',
    method: 'POST',
    data: params,
    headers
  })
}

  /**
   ** 接口名称: 注册
   ** 请求方式: post
   ** 接口地址: /user/auth/register
   ** 接口描述: 用户注册
   ** 请求头:

   ** 请求参数:
   ** phone_number: string 手机号
    ** phone_prefix: string 手机号前缀
    ** code: string 手机验证码
    ** password: string 密码

   ** 响应字段:
   ** account: number 账号

   */
export const APostRegister = (params: Api.Paths.APostRegister.Request,headers?: Api.Paths.APostRegister.Headers) => {
  return request<Api.Paths.APostRegister.Response>({
    url: '/user/auth/register',
    method: 'POST',
    data: params,
    headers
  })
}

  /**
   ** 接口名称: 重置密码
   ** 请求方式: post
   ** 接口地址: /user/auth/reset/password
   ** 接口描述: 用户重置密码
   ** 请求头:
   ** X-CAPTCHA-TICKET: string
    ** Content-Type: application/json
   ** 请求参数:
   ** phone_prefix: string 手机号前缀
    ** phone_number: string 手机号
    ** code: string 手机验证码
    ** password: string 新密码

   ** 响应字段:
   ** code: number 状态码
    ** message: string 响应信息

   */
export const APostPassword = (params: Api.Paths.APostPassword.Request,headers?: Api.Paths.APostPassword.Headers) => {
  return request<Api.Paths.APostPassword.Response>({
    url: '/user/auth/reset/password',
    method: 'POST',
    data: params,
    headers
  })
}

  /**
   ** 接口名称: 用户基础信息
   ** 请求方式: get
   ** 接口地址: /user/info
   ** 接口描述: 获取用户个人信息
   ** 请求头:
   ** X-USER-AUTH: string
    ** X-CAPTCHA-TICKET: string
    ** Content-Type: application/json
   ** 请求参数:

   ** 响应字段:
   ** avatar: number 头像
    ** account: string 账号
    ** nickname: number 昵称
    ** phone: string 带*的手机号
    ** id: number 用户id
    ** avatar_frame: number 头像框

   */
export const AGetInfo = (params: Api.Paths.AGetInfo.Request,headers?: Api.Paths.AGetInfo.Headers) => {
  return request<Api.Paths.AGetInfo.Response>({
    url: '/user/info',
    method: 'GET',
    params,
    headers
  })
}

  /**
   ** 接口名称: 修改头像
   ** 请求方式: post
   ** 接口地址: /user/info/update/avatar
   ** 接口描述: 修改用户头像
   ** 请求头:
   ** X-USER-AUTH: string
    ** X-CAPTCHA-TICKET: string
    ** Content-Type: application/json
   ** 请求参数:
   ** avatar: number 头像
    ** avatar_frame: number 头像框

   ** 响应字段:

   */
export const APostAvatar = (params: Api.Paths.APostAvatar.Request,headers?: Api.Paths.APostAvatar.Headers) => {
  return request<Api.Paths.APostAvatar.Response>({
    url: '/user/info/update/avatar',
    method: 'POST',
    data: params,
    headers
  })
}

  /**
   ** 接口名称: 修改昵称
   ** 请求方式: post
   ** 接口地址: /user/info/update/name
   ** 接口描述: 修改用户昵称
   ** 请求头:
   ** X-USER-AUTH: string
    ** X-CAPTCHA-TICKET: string
    ** Content-Type: application/json
   ** 请求参数:
   ** nickname: string 昵称

   ** 响应字段:
   ** code: number 状态码
    ** message: string 响应信息

   */
export const APostName = (params: Api.Paths.APostName.Request,headers?: Api.Paths.APostName.Headers) => {
  return request<Api.Paths.APostName.Response>({
    url: '/user/info/update/name',
    method: 'POST',
    data: params,
    headers
  })
}

  /**
   ** 接口名称: 发送短信验证码
   ** 请求方式: post
   ** 接口地址: /system/phone/send
   ** 接口描述:
   ** 请求头:
   ** X-CAPTCHA-TICKET: string
    ** Content-Type: application/json
   ** 请求参数:
   ** phone: string 手机号
    ** phone_prefix: string 手机号前缀

   ** 响应字段:
   ** code: number 状态码
    ** message: string 响应信息
    ** trace_id: string 追踪id
    ** text: string 用户展示文本

   */
export const APostSend = (params: Api.Paths.APostSend.Request,headers?: Api.Paths.APostSend.Headers) => {
  return request<Api.Paths.APostSend.Response>({
    url: '/system/phone/send',
    method: 'POST',
    data: params,
    headers
  })
}

