// Make sure "../config/firebase" file exports "auth" and "provider" correctly
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      navigate("/");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div>
      <p>Sign In with Google to continue</p>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
};
