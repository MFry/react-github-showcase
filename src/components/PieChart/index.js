import React from 'react';
import { PieChart } from 'recharts';
import Pie from 'recharts/lib/polar/Pie';

// Reference: http://recharts.org/en-US/api/Pie#label
const renderLabels = data => ({ index }: { index: number }) => (
  <text fill="#0573c6">{data[index].label}</text>
);

// TODO: Label the chart
const RepoChart = ({ title, data }: { title: string, data: Array<Object> }) => (
  <div title={title}>
    <PieChart width={730} height={250}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="label"
        fill="#0573c6"
        label={renderLabels(data)}
      />
    </PieChart>
  </div>
);

export default RepoChart;
