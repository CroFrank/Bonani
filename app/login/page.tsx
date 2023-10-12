import LoginForm from '../_components/LoginForm'

export default function Login() {
  return (
    <div className=" flex h-screen items-center justify-center">
      <div className="mx-2 mb-20 w-96 rounded bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl">Login</h2>
        <LoginForm />
        <p className="mt-4 text-center text-gray-600">
          Don&apos;t have an account?{' '}
          <a href="/register" className="text-components">
            Register
          </a>
        </p>
      </div>
    </div>
  )
}
