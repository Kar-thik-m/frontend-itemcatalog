import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import PropTypes from 'prop-types';
import { backendUrl } from "../../config";

ChartJS.register(ArcElement, Tooltip, Legend);

function fetchData(url, setData, setError) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setData(data);
    })
    .catch((error) => {
      setError(error);
    });
}

export function PieChart({ labels: initialLabels, data: initialData, backgroundColor: initialBackgroundColor }) {
  const [chartData, setChartData] = useState({
    labels: initialLabels,
    datasets: [
      {
        label: "# of Votes",
        data: initialData,
        backgroundColor: initialBackgroundColor,
        borderWidth: 4,
      },
    ],
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(`${backendUrl}/electronic`, setChartData, setError);
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        display: true,
      },
      title: {
        display: false,
      },
    },
    cutoutPercentage: 100,
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <Doughnut data={chartData} options={options} />;
}

PieChart.propTypes = {
  labels: PropTypes.array,
  data: PropTypes.array,
  backgroundColor: PropTypes.array,
};

PieChart.defaultProps = {
  labels: [],
  data: [],
  backgroundColor: [],
};
export default PieChart;