'use client'

import { pb } from "@/lib/db";
import styles from "./loginForm.module.css";
import { redirect } from "next/navigation";

const LoginForm = () => {
  async function loginAuth(formData: FormData) {
    const identity = formData.get('identity')
    const password = formData.get('password')

    try {
      await pb.collection('users').authWithPassword(identity as string, password as string)
      redirect(`/dashboard`)


    } catch (error) {
      console.error('Este error es de auth', error)
      throw error

    }

  }

  return (
    <form action={loginAuth} className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="username" name="identity" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
