import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { AnimationOnScroll } from "react-animation-on-scroll";

const IntroOfCharts = () => {
  return null;
};

const CustomToolTip = () => {
  return null;
};

function SkillChart() {
  const data = [
    {
      name: "HTML5",
      Stack: 7.5,
      percentage: "75%",
    },
    {
      name: "TailwindCSS",
      Stack: 6,
      percentage: "60%",
    },
    {
      name: "React",
      Stack: 6,
      percentage: "60%",
    },
    {
      name: "PHP",
      Stack: 7,
      percentage: "70%",
    },
  ];

  return (
    <AnimationOnScroll
      animateOnce={true}
      animateIn="animate__zoomIn animate__faster"
    >
      <section className="flex m-auto md:text-base text-xxs font-semibold items-center justify-center">
        <ResponsiveContainer width="55%" height={300}>
          <BarChart maxBarSize={35} data={data}>
            <XAxis hide />
            <YAxis hide domain={[0, 10]} />
            <Tooltip />
            <Legend />
            <Bar legendType="diamond" dataKey="Stack">
              <LabelList dataKey="percentage" position="top" fill="#9d9d9e" />
              <LabelList dataKey="name" fill="#9d9d9e" angle="90" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </section>
    </AnimationOnScroll>
  );
}

export default SkillChart;
