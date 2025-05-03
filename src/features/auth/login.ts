import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import { FormEvent } from "react";
import { NavigateFunction } from "react-router-dom";

export default async function loginFeature(
  e: FormEvent<HTMLFormElement>,
  navigate: NavigateFunction
) {
  e.preventDefault();
  const data = new FormData(e.currentTarget);

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      data.get("email") as string,
      data.get("password") as string
    );

    Cookies.set(
      "user",
      JSON.stringify({
        email: userCredential.user.email,
        displayName: userCredential.user.displayName,
      }),
      { expires: 7 } 
    );

    
    await Swal.fire({
      icon: "success",
      title: "Login successful!",
      showConfirmButton: false,
      timer: 1500,
    });

    navigate("/");

  } catch (error: any) {
    if (error.code === "auth/wrong-password") {
      await Swal.fire({
        icon: "error",
        title: "Incorrect password. Please try again.",
        confirmButtonColor: "#d33",
      });
    } else if (error.code === "auth/user-not-found") {
      await Swal.fire({
        icon: "error",
        title: "No account found with this email.",
        confirmButtonColor: "#d33",
      });
    } else {
      await Swal.fire({
        icon: "error",
        title: "Something went wrong. Please try again.",
        confirmButtonColor: "#d33",
      });
    }
    console.error("Error logging in:", error.message);
  }
}
