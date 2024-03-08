declare namespace Api {
  namespace Paths {
    /**
    ** 接口名称: 普通登录
    ** 接口地址: /user/auth/login/normal
    ** 请求方式: post
    ** 接口描述: 用户账号密码登录

    */
    namespace APostNormal {
      /** 请求头 */
      interface Headers {
        'X-CAPTCHA-TICKET': string
      }

      /** 请求 */
      interface Request {
        /** 用户账号 */
        account: number
        /** 密码 */
        password: string
      }

      /** 响应 */
      interface Response {
        /** 密钥串 */
        session: string
      }
    }

    /**
     ** 接口名称: 手机号登录
     ** 接口地址: /user/auth/login/phone
     ** 请求方式: post
     ** 接口描述: 用户手机号登录
     */
    namespace APostPhone {
      /** 请求头 */
      interface Headers {
        'X-CAPTCHA-TICKET': string
      }

      /** 请求 */
      interface Request {
        /** 手机号 */
        phone_number: string
        /** 验证码 */
        code: string
        /** 手机前缀 */
        phone_prefix: string
      }

      /** 响应 */
      interface Response {
        /** 密钥串 */
        session: string
      }
    }

    /**
     ** 接口名称: 注册
     ** 接口地址: /user/auth/register
     ** 请求方式: post
     ** 接口描述: 用户注册
     */
    namespace APostRegister {
      /** 请求头 */
      interface Headers {}

      /** 请求 */
      interface Request {
        /** 手机号 */
        phone_number: string
        /** 手机号前缀 */
        phone_prefix: string
        /** 手机验证码 */
        code: string
        /** 密码 */
        password: string
      }

      /** 响应 */
      interface Response {
        /** 账号 */
        account: number
      }
    }

    /**
     ** 接口名称: 重置密码
     ** 接口地址: /user/auth/reset/password
     ** 请求方式: post
     ** 接口描述: 用户重置密码
     */
    namespace APostPassword {
      /** 请求头 */
      interface Headers {
        'X-CAPTCHA-TICKET': string
      }

      /** 请求 */
      interface Request {
        /** 手机号前缀 */
        phone_prefix: string
        /** 手机号 */
        phone_number: string
        /** 手机验证码 */
        code: string
        /** 新密码 */
        password: string
      }

      /** 响应 */
      interface Response {
        /** 状态码 */
        code: number
        /** 响应信息 */
        message: string
      }
    }

    /**
     ** 接口名称: 用户基础信息
     ** 接口地址: /user/info
     ** 请求方式: get
     ** 接口描述: 获取用户个人信息
     */
    namespace AGetInfo {
      /** 请求头 */
      interface Headers {
        'X-USER-AUTH': string
        'X-CAPTCHA-TICKET': string
      }

      /** 请求 */
      interface Request {}

      /** 响应 */
      interface Response {
        /** 头像 */
        avatar: number
        /** 账号 */
        account: string
        /** 昵称 */
        nickname: number
        /** 带*的手机号 */
        phone: string
        /** 用户id */
        id: number
        /** 头像框 */
        avatar_frame: number
      }
    }

    /**
     ** 接口名称: 修改头像
     ** 接口地址: /user/info/update/avatar
     ** 请求方式: post
     ** 接口描述: 修改用户头像
     */
    namespace APostAvatar {
      /** 请求头 */
      interface Headers {
        'X-USER-AUTH': string
        'X-CAPTCHA-TICKET': string
      }

      /** 请求 */
      interface Request {
        /** 头像 */
        avatar: number
        /** 头像框 */
        avatar_frame: number
      }

      /** 响应 */
      interface Response {}
    }

    /**
     ** 接口名称: 修改昵称
     ** 接口地址: /user/info/update/name
     ** 请求方式: post
     ** 接口描述: 修改用户昵称
     */
    namespace APostName {
      /** 请求头 */
      interface Headers {
        'X-USER-AUTH': string
        'X-CAPTCHA-TICKET': string
      }

      /** 请求 */
      interface Request {
        /** 昵称 */
        nickname: string
      }

      /** 响应 */
      interface Response {
        /** 状态码 */
        code: number
        /** 响应信息 */
        message: string
      }
    }

    /**
     ** 接口名称: 发送短信验证码
     ** 接口地址: /system/phone/send
     ** 请求方式: post
     ** 接口描述:
     */
    namespace APostSend {
      /** 请求头 */
      interface Headers {
        'X-CAPTCHA-TICKET': string
      }

      /** 请求 */
      interface Request {
        /** 手机号 */
        phone: string
        /** 手机号前缀 */
        phone_prefix: string
      }

      /** 响应 */
      interface Response {
        /** 状态码 */
        code: number
        /** 响应信息 */
        message: string
        /** 追踪id */
        trace_id: string
        /** 用户展示文本 */
        text: string
      }
    }
  }
}
