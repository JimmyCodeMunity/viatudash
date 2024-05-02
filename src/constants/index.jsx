import { LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer } from 'recharts'

export const map = (value, sMin, sMax, dMin, dMax) => {
    return dMin + ((value - sMin) / (sMax - sMin)) * (dMax - dMin);
};
export const pi = Math.PI;
export const tau = 2 * pi;

export const employeeData = [
    {
        id: 1,
        name: 'Esther Howard',
        position: "Sale's manager USA",
        transactions: 3490,
        rise: true,
        tasksCompleted: 3,
        imgId: 0,
    },

    {
        id: 2,
        name: 'Eleanor Pena',
        position: "Sale's manager Europe",
        transactions: 590,
        rise: false,
        tasksCompleted: 5,
        imgId: 2,
    },

    {
        id: 3,
        name: 'Robert Fox',
        position: "Sale's manager Asia",
        transactions: 2600,
        rise: true,
        tasksCompleted: 1,
        imgId: 3,
    },
];

export const Countrydata = [
    { name: 'USA', rise: true, value: 21942.83, id: 1 },
    { name: 'Ireland', rise: false, value: 19710.0, id: 2 },
    { name: 'Ukraine', rise: false, value: 12320.3, id: 3 },
    { name: 'Sweden', rise: true, value: 9725.0, id: 4 },
];
export const segmentationData = [
    { c1: 'Not Specified', c2: '800', c3: '#363636', color: '#535353' },
    { c1: 'Male', c2: '441', c3: '#818bb1', color: '#595f77' },
    { c1: 'Female', c2: '233', c3: '#2c365d', color: '#232942' },
    { c1: 'Other', c2: '126', c3: '#334ed8', color: '#2c3051' },
];

export const sidebarItems = [
    [
        { id: '0', title: 'Dashboard', notifications: false,link:'/' },
        { id: '1', title: 'Add Product', notifications: false,link:'/addproduct' },
        { id: '2', title: 'Chat', notifications: 6 },
        { id: '3', title: 'Team', notifications: false },
    ],
    [
        { id: '4', title: 'Tasks', notifications: false },
        { id: '5', title: 'Reports', notifications: false },
        { id: '6', title: 'Settings', notifications: false },
    ],
];

export const graphData = [
    'Nov',
    'Dec',
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
].map((i) => {
    const revenue = 500 + Math.random() * 2000;
    const expectedRevenue = Math.max(revenue + (Math.random() - 0.5) * 2000, 0);
    return {
        name: i,
        revenue,
        expectedRevenue,
        sales: Math.floor(Math.random() * 500),
    };
});
