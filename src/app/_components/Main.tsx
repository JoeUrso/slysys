"use client";

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Main = () => {
  const data = {
    labels: ["Rent", "Food", "Labor", "Utilities"],
    datasets: [
      {
        data: [3, 6, 9, 12],
        backgroundColor: ["#64748B", "#94A3B8", "#A8A29E", "#F1F5F9"],
      },
    ],
  };

  const options = {};

  return (
    <main className="flex h-full w-full flex-1 items-center justify-center overflow-auto p-4">
      <div className="h-3/4">
        <Pie data={data} options={options}></Pie>
      </div>
    </main>
  );
};

export default Main;
