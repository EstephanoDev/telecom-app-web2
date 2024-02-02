'use client'

import { pb } from "@/lib/db";
import styles from "./sidebar.module.css";

const UserData = () => {
  const user = pb.authStore.model
  return (
    <div className={styles.userDetail}>
      <span className={styles.username}>{user?.username}</span>
      <span className={styles.userTitle}>Administrator</span>
    </div>
  )
}
export default UserData
