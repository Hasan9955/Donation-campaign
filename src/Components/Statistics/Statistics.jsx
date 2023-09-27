
import { PieChart, Pie, Cell } from 'recharts';
import { getStoredCards } from '../../LocalStorage/LocalStorage';
import { useEffect, useState } from 'react';


const Statistics = () => {
    const [total, setTotal] = useState(12)
    const storedCard = getStoredCards();

    useEffect(() => {
        const calculate = total - storedCard.length
        setTotal(calculate)
    }, [])



    const data = [
        { name: 'Group A', value: total },
        { name: 'Group B', value: storedCard.length },

    ];

    const COLORS = ['#FF444A', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} fontWeight={700} fontSize={30} dominantBaseline="central">
                {`${(percent * 100).toFixed(1)}%`}
            </text>
        );
    };
    return (
        <div>
            <h1 className='text-5xl font-bold text-center p-3'>Your donation chart</h1>
            <div>
                <PieChart  width={1200} height={500}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={200}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            <div>
                <h2></h2>
            </div>
        </div>
    );
};

export default Statistics;

