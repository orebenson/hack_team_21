import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useTheme } from '@emotion/react';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ percentage, saved, target, month }) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: [theme.palette.primary.main, theme.palette.grey[300]],
        hoverBackgroundColor: [theme.palette.primary.dark, theme.palette.grey[300]],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '70%', // Controls the thickness of the donut
    plugins: {
      tooltip: { enabled: false },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div style={{ position: 'relative', width: '70%', aspectRatio: '1', margin: '20px 0' }}>
      <Doughnut data={data} options={options} />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: 'calc(10px + 1vw)', // Responsive font size
        fontWeight: 'bold',
        color: theme.palette.text.primary,
        textAlign: 'center',
        maxWidth: '80%', // Ensure the text doesn't overflow
        wordWrap: 'break-word',
      }}>
        {percentage === 100 && <div>Congrats!</div>}
        <div>{`You've saved £${saved}/£${target}`}</div>
        <div>in {month}</div>
      </div>
    </div>
  );
};

export default DonutChart;
