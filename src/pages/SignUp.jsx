import { Link } from 'react-router-dom';
import SignUpForm from '../components/auth/SignUpForm';
import Logo from '../components/common/Logo';

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="flex flex-col items-center">
          <Link to="/" className="mb-6">
            <Logo />
          </Link>
          <h2 className="text-center text-3xl font-extrabold text-white">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-200">
            Already have an account?{' '}
            <Link to="/login" className="font-medium hover:text-white">
              Sign in
            </Link>
          </p>
        </div>

        <div className="relative p-8 rounded-2xl backdrop-blur-lg bg-white/10 shadow-xl border border-white/20">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl" />
          <div className="relative">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
}