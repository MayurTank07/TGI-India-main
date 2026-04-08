import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { authAPI } from "../services/api";
import { ArrowLeft, Mail, KeyRound, ShieldCheck } from "lucide-react";

const STEPS = { EMAIL: 1, OTP: 2, RESET: 3, SUCCESS: 4 };

export default function ForgotPassword() {
  const [step, setStep] = useState(STEPS.EMAIL);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetToken, setResetToken] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Step 1: Send OTP
  async function handleSendOtp(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await authAPI.forgotPassword(email);
      setStep(STEPS.OTP);
    } catch (err) {
      setError(err.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  }

  // Step 2: Verify OTP
  async function handleVerifyOtp(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await authAPI.verifyOtp(email, otp);
      setResetToken(res.resetToken);
      setStep(STEPS.RESET);
    } catch (err) {
      setError(err.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  }

  // Step 3: Reset Password
  async function handleResetPassword(e) {
    e.preventDefault();
    setError("");

    if (newPassword.length < 6) {
      return setError("Password must be at least 6 characters");
    }
    if (newPassword !== confirmPassword) {
      return setError("Passwords do not match");
    }

    setLoading(true);
    try {
      await authAPI.resetPassword(resetToken, newPassword);
      setStep(STEPS.SUCCESS);
    } catch (err) {
      setError(err.message || "Failed to reset password");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#17021d] to-[#3C0060] flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 w-full max-w-md">

        {/* Logo */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full" />
          <div>
            <h2 className="text-lg font-bold text-gray-900">TG INDIA</h2>
            <p className="text-xs text-gray-500">Admin Panel</p>
          </div>
        </div>

        {/* Step 1: Enter Email */}
        {step === STEPS.EMAIL && (
          <>
            <div className="flex items-center gap-3 mb-2">
              <Mail className="w-6 h-6 text-purple-600" />
              <h1 className="text-xl font-bold text-gray-900">Forgot Password</h1>
            </div>
            <p className="text-gray-500 text-sm mb-6">
              Enter your admin email. We'll send a verification code to <strong>talentgroupofindia@gmail.com</strong>
            </p>

            <form onSubmit={handleSendOtp} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(""); }}
                  placeholder="admin@tgindia.com"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                  autoFocus
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#7A1CC2] to-[#3C33D8] text-white font-semibold py-3 rounded-xl hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? "Sending OTP..." : "Send Verification Code"}
              </button>
            </form>
          </>
        )}

        {/* Step 2: Enter OTP */}
        {step === STEPS.OTP && (
          <>
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheck className="w-6 h-6 text-purple-600" />
              <h1 className="text-xl font-bold text-gray-900">Verify OTP</h1>
            </div>
            <p className="text-gray-500 text-sm mb-6">
              Enter the 6-digit code sent to your registered email.
            </p>

            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Verification Code</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => { setOtp(e.target.value.replace(/\D/g, '').slice(0, 6)); setError(""); }}
                  placeholder="Enter 6-digit code"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 text-center text-2xl tracking-[0.5em] font-mono focus:outline-none focus:ring-2 focus:ring-purple-500"
                  maxLength={6}
                  required
                  autoFocus
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                disabled={loading || otp.length !== 6}
                className="w-full bg-gradient-to-r from-[#7A1CC2] to-[#3C33D8] text-white font-semibold py-3 rounded-xl hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? "Verifying..." : "Verify Code"}
              </button>
              <button
                type="button"
                onClick={() => { setStep(STEPS.EMAIL); setOtp(""); setError(""); }}
                className="w-full text-gray-500 text-sm hover:text-purple-600 transition"
              >
                Didn't receive code? Go back
              </button>
            </form>
          </>
        )}

        {/* Step 3: Set New Password */}
        {step === STEPS.RESET && (
          <>
            <div className="flex items-center gap-3 mb-2">
              <KeyRound className="w-6 h-6 text-purple-600" />
              <h1 className="text-xl font-bold text-gray-900">Reset Password</h1>
            </div>
            <p className="text-gray-500 text-sm mb-6">
              Set your new password. Minimum 6 characters.
            </p>

            <form onSubmit={handleResetPassword} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => { setNewPassword(e.target.value); setError(""); }}
                  placeholder="Enter new password"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                  autoFocus
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => { setConfirmPassword(e.target.value); setError(""); }}
                  placeholder="Confirm new password"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#7A1CC2] to-[#3C33D8] text-white font-semibold py-3 rounded-xl hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? "Resetting..." : "Reset Password"}
              </button>
            </form>
          </>
        )}

        {/* Step 4: Success */}
        {step === STEPS.SUCCESS && (
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-xl font-bold text-gray-900 mb-2">Password Reset!</h1>
            <p className="text-gray-500 text-sm mb-6">
              Your password has been reset successfully. You can now login with your new password.
            </p>
            <button
              onClick={() => navigate("/admin/login")}
              className="w-full bg-gradient-to-r from-[#7A1CC2] to-[#3C33D8] text-white font-semibold py-3 rounded-xl hover:opacity-90 transition"
            >
              Back to Login
            </button>
          </div>
        )}

        {/* Back to login link */}
        {step !== STEPS.SUCCESS && (
          <Link
            to="/admin/login"
            className="flex items-center gap-2 justify-center text-gray-400 text-sm mt-6 hover:text-purple-600 transition"
          >
            <ArrowLeft size={14} />
            Back to Login
          </Link>
        )}

        <p className="text-center text-gray-400 text-xs mt-6">
          TGI Admin Panel — Restricted Access
        </p>
      </div>
    </div>
  );
}
