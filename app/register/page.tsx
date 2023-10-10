import RegisterForm from "../_components/RegisterForm";

export default function Register() {

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="bg-white p-8 rounded shadow-md w-96 mb-20 mx-2">
                <h2 className="text-2xl mb-6 text-center">Register</h2>
                <RegisterForm />
                <p className="mt-4 text-center text-gray-600">Already have an account? <a href="/login" className="text-components">Login</a></p>
            </div>
        </div>
    )
}