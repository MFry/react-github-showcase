import React from 'react';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

const RadialStatChart = ({
  title,
  data,
}: {
  title: string,
  data: Array<Object>,
}) => {
  const style = {
    top: 0,
    left: 350,
    lineHeight: '24px',
  };
  return (
    <div>
      <h3>{title}</h3>
      <RadialBarChart
        cx={150}
        cy={150}
        innerRadius={40}
        outerRadius={140}
        width={500}
        height={300}
        barSize={24}
        data={data}
      >
        <RadialBar
          minAngle={15}
          label={{ position: 'insideStart', fill: '#282c34' }}
          background
          clockWise
          dataKey="value"
        />
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
        />
      </RadialBarChart>
    </div>
  );
};

export default RadialStatChart;
