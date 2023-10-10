import LoginForm from "../_components/LoginForm";

export default function Login() {
    return (
        <div className=" h-screen flex justify-center items-center">
            <div className="bg-white p-8 rounded shadow-md w-96 mx-2 mb-20">
                <h2 className="text-2xl mb-6 text-center">Login</h2>
                <LoginForm />
                <p className="mt-4 text-center text-gray-600">Don&apos;t have an account? <a href="/register" className="text-components">Register</a></p>
            </div>
        </div>
    )
}