// src/pages/SignIn.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "@/sections/Footer";
import { Navbar } from "@/sections/MainContent/components/Navbar";
import { auth } from "@/firebase"; // Import auth service
import { signInWithEmailAndPassword } from "firebase/auth";
import { useUser } from "@/context/UserContext"; // Import UserContext

export const SignIn = () => {
  const navigate = useNavigate();
  const { setUserType } = useUser(); // Get setUserType from context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in:", userCredential.user);

      // IMPORTANT: In a real app, you'd fetch the user's profile from Realtime DB
      // to determine their 'userType' (face, creator, brand) and set it in context.
      // For this demo, we'll assume a default or prompt the user.
      // For now, we'll just navigate.
      setUserType('face'); // Default to 'face' for demonstration, or prompt user
      navigate('/'); // Redirect to home or a dashboard after sign-in

    } catch (err: any) {
      console.error("Sign-in error:", err);
      switch (err.code) {
        case 'auth/invalid-email':
          setError('Invalid email address format.');
          break;
        case 'auth/user-disabled':
          setError('This user account has been disabled.');
          break;
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          setError('Invalid email or password.');
          break;
        default:
          setError('Failed to sign in. Please check your credentials.');
          break;
      }
    }
  };

  return (
    <div className="fixed box-border caret-transparent h-[952px] outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] overflow-auto inset-0">
      <div className="relative box-border caret-transparent basis-0 grow shrink-0 min-h-[952px] min-w-px outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)] w-full">
        <div className="bg-gradient-to-br from-[#F4FDFD] via-[#F8EDE6] to-[#FFFCF5] box-border caret-transparent min-h-screen outline-[oklab(0.839909_-0.141908_-0.0158958_/_0.5)]">
          <Navbar />
          
          <main className="py-16 md:py-24 flex items-center justify-center">
            <div className="max-w-md mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Sign In
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Access your Likelee account.
              </p>

              <div className="bg-white border-2 border-black p-8">
                <form onSubmit={handleSignIn}>
                  <div className="mb-4 text-left">
                    <label className="text-sm font-medium block mb-2">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="text-base bg-stone-50 border-2 border-black px-3 py-2 w-full"
                    />
                  </div>
                  <div className="mb-6 text-left">
                    <label className="text-sm font-medium block mb-2">Password</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      required
                      className="text-base bg-stone-50 border-2 border-black px-3 py-2 w-full"
                    />
                  </div>

                  {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                  <button
                    type="submit"
                    className="text-lg font-semibold bg-cyan-400 text-white px-8 py-4 border-2 border-black hover:bg-cyan-500 transition-colors w-full"
                  >
                    Sign In
                  </button>
                </form>
                <p className="text-sm text-gray-600 mt-6">
                  Don't have an account? <button onClick={() => navigate('/sign-up')} className="text-cyan-400 hover:underline">Sign Up</button>
                </p>
              </div>

              <button 
                onClick={() => navigate('/')}
                className="mt-12 text-lg font-semibold bg-gray-200 text-black px-8 py-4 border-2 border-black hover:bg-gray-300 transition-colors"
              >
                ← Back to Home
              </button>
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
};
