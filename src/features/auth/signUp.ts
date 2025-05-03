import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase.config";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import { FormEvent } from "react";
import { NavigateFunction } from "react-router-dom";

export default async function signUp(
  e: FormEvent<HTMLFormElement>,
  navigate: NavigateFunction
) {
  e.preventDefault();
  const data = new FormData(e.currentTarget);

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.get("email") as string,
      data.get("password") as string
    );

    if (auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName: `${data.get("firstName")}`,
      });
    }

   
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
      title: "You are signed in!",
      showConfirmButton: false,
      timer: 1500,
    });

    navigate("/profile");

  } catch (error:any) {
    if (error.code === "auth/email-already-in-use") {
      await Swal.fire({
        icon: "error",
        title: "This email is already in use!",
        confirmButtonColor: "#d33",
      });
    } else {
      await Swal.fire({
        icon: "error",
        title: "Something went wrong. Please try again.",
        confirmButtonColor: "#d33",
      });
    }
    console.error("Error signing up:", error.message);
  }
}
