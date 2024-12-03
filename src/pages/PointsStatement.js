import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import theme from '../theme';
import '../fonts.css';
import BorderedCard from '../components/BorderedCard';

const PointsStatement = () => {
    const startingBalance = 2000;

    const expenses = [
        { date: '2024-12-05', voucher: 'Voucher A', cost: 100 },
        { date: '2024-12-10', voucher: 'Voucher B', cost: 50 },
        { date: '2024-12-15', voucher: 'Voucher C', cost: 75 },
        { date: '2024-12-15', voucher: 'Voucher C', cost: 1275 },
    ];

    const pointsEarned = [
        { month: 'November', points: 400 },
        { month: 'December', points: 2500 },
        { month: 'October', points: 300 },
    ];

    pointsEarned.sort((a, b) => new Date(b.month + ' 01, 2024') - new Date(a.month + ' 01, 2024'));

    const calculateBalance = (month) => {
        const points = pointsEarned.find(p => p.month === month)?.points || 0;
        const expensesTotal = expenses
            .filter(expense => new Date(expense.date).getMonth() === new Date(`${month} 01, 2024`).getMonth())
            .reduce((acc, expense) => acc + expense.cost, 0);
        return startingBalance + points - expensesTotal;
    };

    return (
        <ThemeProvider theme={theme}>
            <div>
                <Typography style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Points Statement</Typography>

                {pointsEarned.map((entry, index) => {
                    const month = entry.month;
                    const pointsThisMonth = entry.points;
                    const expensesThisMonth = expenses
                        .filter(expense => new Date(expense.date).getMonth() === new Date(`${month} 01, 2024`).getMonth())
                        .reduce((acc, expense) => acc + expense.cost, 0);

                    const balanceAtStartOfMonth = startingBalance;
                    const balanceAtEndOfMonth = calculateBalance(month);

                    return (
                        <BorderedCard key={index}>
                            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                                <Typography variant="body1" style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    {month}
                                </Typography>
                            </Box>

                            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                                <Typography variant="body1" style={{ fontSize: '16px' }}>
                                    Balance at the start of this month: {balanceAtStartOfMonth}
                                </Typography>
                            </Box>

                            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                                <Typography variant="body1" style={{ fontSize: '16px' }}>
                                    Points earned this month: {pointsThisMonth}
                                </Typography>
                            </Box>

                            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                                <Typography variant="body1" style={{ fontSize: '16px' }}>
                                    Points spent this month: {expensesThisMonth}
                                </Typography>
                            </Box>

                            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                                <Typography variant="body1" style={{ fontSize: '16px' }}>
                                    Balance at the end of this month: {balanceAtEndOfMonth}
                                </Typography>
                            </Box>
                        </BorderedCard>
                    );
                })}
            </div>
        </ThemeProvider>
    );
};

export default PointsStatement;
