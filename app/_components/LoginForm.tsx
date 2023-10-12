import { signIn } from 'next-auth/react'
import { FormEvent } from 'react'

export default function LoginForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    signIn('credentials', {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-600"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 w-full rounded-md border p-2"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-600"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="mt-1 w-full rounded-md border p-2"
        />
      </div>
      <button
        type="submit"
        className="rounded border-2 border-components px-4 py-2 font-bold text-components transition duration-300 ease-in-out hover:bg-components hover:text-white"
      >
        Login
      </button>
    </form>
  )
}
