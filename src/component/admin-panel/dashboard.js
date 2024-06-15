import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const StatisticsChart = () => {
    const [productSalesData, setProductSalesData] = useState(null);
    const [revenueData, setRevenueData] = useState(null);

    const fetchStatistics = async () => {
        try {
            const res = await axios.get('http://localhost:5000/transactions/statistic');
            const { productSales, totalRevenue } = res.data;

            const productLabels = productSales.map(sale => sale.name);
            const productAmounts = productSales.map(sale => sale.totalAmountSold);

            setProductSalesData({
                labels: productLabels,
                datasets: [
                    {
                        label: 'Total Products Sold',
                        data: productAmounts,
                        backgroundColor: 'rgba(75, 192, 192, 0.6)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                    },
                ],
            });

            setRevenueData({
                labels: ['Total Revenue'],
                datasets: [
                    {
                        label: 'Total Revenue',
                        data: [totalRevenue],
                        backgroundColor: 'rgba(153, 102, 255, 0.6)',
                        borderColor: 'rgba(153, 102, 255, 1)',
                        borderWidth: 1,
                    },
                ],
            });
        } catch (error) {
            console.error('Error fetching statistics:', error);
        }
    };

    useEffect(() => {
        fetchStatistics();
    }, []);

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Transaction Statistics</h1>
            {productSalesData && (
                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-2">Products Sold</h2>
                    <div className="w-full bg-white p-4 rounded-lg shadow">
                        <Bar
                            data={productSalesData}
                            options={{
                                responsive: true,
                                plugins: {
                                    legend: { position: 'top' },
                                    title: { display: true, text: 'Total Products Sold by Product ID' },
                                },
                                scales: {
                                    y: {
                                        beginAtZero: true,
                                        title: {
                                            display: true,
                                            text: 'Amount Sold',
                                        },
                                    },
                                    x: {
                                        title: {
                                            display: true,
                                            text: 'Product',
                                        },
                                    },
                                },
                            }}
                        />
                    </div>
                </div>
            )}
            {revenueData && (
                <div>
                    <h2 className="text-xl font-bold mb-2">Total Revenue</h2>
                    <div className="w-full bg-white p-4 rounded-lg shadow">
                        <Bar
                            data={revenueData}
                            options={{
                                responsive: true,
                                plugins: {
                                    legend: { position: 'top' },
                                    title: { display: true, text: 'Total Revenue' },
                                },
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default StatisticsChart;
