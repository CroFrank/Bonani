'use client'

import { FormEvent } from "react"

export default function RegisterForm() {
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify({
                name: formData.get('name'),
                email: formData.get('email'),
                password: formData.get('password')
            })
        })
        console.log(response)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
                <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md" />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md" />
            </div>
            <button type="submit"
                className="border-2 border-components hover:text-white hover:bg-components text-components font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                Register
            </button>
        </form>
    )
}