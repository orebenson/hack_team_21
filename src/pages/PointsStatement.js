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
    ];

    const pointsEarned = [
        { month: 'November', points: 400 },
        { month: 'December', points: 300 },
    ];

    const calculateBalance = (month) => {
        const points = pointsEarned.find(p => p.month === month)?.points || 0;
        const expensesTotal = expenses.reduce((acc, expense) => acc + expense.cost, 0);
        return startingBalance + points - expensesTotal;
    };

    const months = pointsEarned.map(p => p.month);

    return (
        <ThemeProvider theme={theme}>
            <div>
                <Typography variant="h6" align="center">
                    Points Statement
                </Typography>

                {months.map((month, index) => {
                    const pointsThisMonth = pointsEarned.find(p => p.month === month).points;
                    const balanceAtStartOfMonth = startingBalance
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
                                    Points balance at beginning of the month: {balanceAtStartOfMonth}
                                </Typography>
                            </Box>

                            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                                <Typography variant="body1" style={{ fontSize: '16px' }}>
                                    Points earned this month: {pointsThisMonth}
                                </Typography>
                            </Box>

                            <Box mb={2}>
                                <Typography variant="body1" style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    Expenses this month:
                                </Typography>
                                {expenses.map((expense, index) => (
                                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={1} key={index}>
                                        <Typography variant="body1" style={{ fontSize: '14px' }}>
                                            {expense.date} - {expense.voucher} - {expense.cost}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>

                            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                                <Typography variant="body1" style={{ fontSize: '16px' }}>
                                    Points balance at end of the month: {balanceAtEndOfMonth}
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
