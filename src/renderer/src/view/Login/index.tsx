import bg from '@renderer/assets/images/bg.png'
import LoginForm from '@renderer/components/LoginForm'
const Login: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div className="">
        <LoginForm />
      </div>
    </div>
  )
}
export default Login
