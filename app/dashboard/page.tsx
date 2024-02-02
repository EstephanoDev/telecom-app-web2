'use client'

import { Card, Chart, Rightbar, Transactions, styles } from "@/app/ui/dashboard";
import { cards } from "@/lib/data";
import { pb } from "@/lib/db";
import { redirect, useParams } from "next/navigation";

const Dashboard = () => {
  if (!pb.authStore) {
    redirect('/login')
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
