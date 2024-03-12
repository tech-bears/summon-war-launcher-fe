import { useEffect, useRef, useState } from 'react'

const Captcha: React.FC = () => {
  const [captcha, setCaptcha] = useState(null)

  const btnRef = useRef<HTMLElement | null>()
  const getInstance = (instance) => {
    setCaptcha(instance)
  }
  const onBizResultCallback = () => {
    console.log('onBizResultCallback')
  }
  const captchaVerifyCallback = async (captchaVerifyParam) => {
    const encode = encodeURI(captchaVerifyParam)
    const ticket = btoa(encode)
  }
  useEffect(() => {
    ;(window as any).initAliyunCaptcha({
      SceneId: 'jszkqj5m', // 场景ID。根据步骤二新建验证场景后，您可以在验证码场景列表，获取该场景的场景ID
      prefix: '1n4vul', // 身份标。开通阿里云验证码2.0后，您可以在控制台概览页面的实例基本信息卡片区域，获取身份标
      mode: 'popup', // 验证码模式。popup表示要集成的验证码模式为弹出式。无需修改
      element: '#captcha-element', // 页面上预留的渲染验证码的元素，与原代码中预留的页面元素保持一致。
      button: '#login-button', // 触发验证码弹窗的元素。button表示单击登录按钮后，触发captchaVerifyCallback函数。您可以根据实际使用的元素修改element的值
      captchaVerifyCallback: captchaVerifyCallback, // 业务请求(带验证码校验)回调函数，无需修改
      onBizResultCallback: onBizResultCallback, // 业务请求结果回调函数，无需修改
      getInstance: getInstance, // 绑定验证码实例函数，无需修改
      slideStyle: {
        width: 360,
        height: 80
      }, // 滑块验证码样式，支持自定义宽度和高度，单位为px。其中，width最小值为320 px
      language: 'cn' // 验证码语言类型，支持简体中文（cn）、繁体中文（tw）、英文（en）
    })
    return () => {
      document.getElementById('aliyunCaptcha-mask')?.remove()
      document.getElementById('aliyunCaptcha-window-popup')?.remove()
    }
  }, [])
  return (
    <div>
      {/* <button
        id="captcha-button"
        style={{
          position: 'absolute',
          top: '-9999px',
          left: '-9999px'
        }}
      >
        获取验证码
      </button> */}
      <div id="captcha-element"></div>
    </div>
  )
}
export default Captcha
