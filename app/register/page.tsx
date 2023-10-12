import RegisterForm from '../_components/RegisterForm';

export default function Register() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="mx-2 mb-20 w-96 rounded bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl">Register</h2>
        <RegisterForm />
        <p className="mt-4 text-center text-gray-600">
          Already have an account?
          <a href="/login" className="text-components">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
