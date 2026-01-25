import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../utils/supabaseClient";
import { TextInput } from "../components/common";
import "../styles/login-signup.scss";

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [checking, setChecking] = useState(true);

useEffect(() => {
  (async () => {
    try {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        toast.error("Reset link error: " + error.message);
        return;
      }

      if (!data?.session) {
        toast.error("Reset link is invalid or expired. Please request a new one.");
      }
    } finally {
      setChecking(false);
    }
  })();
}, []);

  const handleSetPassword = async (e) => {
    e.preventDefault();

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      toast.error("Passwords do not match.");
      return;
    }

    const toastId = toast.loading("Updating password...");

    try {
      const { error } = await supabase.auth.updateUser({ password });

      if (error) {
        toast.dismiss(toastId);
        toast.error("Couldn’t update password: " + error.message);
        return;
      }

      toast.dismiss(toastId);
      toast.success("Password updated. Log in with your new password.");

      // Optional: sign out to force clean login
      await supabase.auth.signOut();

      navigate("/login");
    } catch (err) {
      toast.dismiss(toastId);
      toast.error("Unexpected error updating password.");
    }
  };

  return (
    <div className="login">
      <h2 className="signup__title">Reset Password</h2>

      {checking ? (
        <p>Checking reset link...</p>
      ) : (
        <form className="form-field" onSubmit={handleSetPassword}>
          <TextInput
            type="password"
            name="password"
            label="New Password"
            autoComplete="new-password"
            className="form-field__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <TextInput
            type="password"
            name="confirm"
            label="Confirm Password"
            autoComplete="new-password"
            className="form-field__input"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />

          <button type="submit" className="form-field__button">
            Set New Password
          </button>
        </form>
      )}
    </div>
  );
};

export default ResetPasswordPage;
