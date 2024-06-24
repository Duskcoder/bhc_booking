import React from 'react'
import {
    AreaChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Area,
    PieChart,
    Pie,
    LineChart,
    Legend,
    Line,
    RadialBarChart,
    RadialBar,
    
} from "recharts";
function Dashboard() {
    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400,
            "amt": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398,
            "amt": 2210
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800,
            "amt": 2290
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908,
            "amt": 2000
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800,
            "amt": 2181
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800,
            "amt": 2500
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300,
            "amt": 2100
        }
    ]

    const data1 = [
        {
          "name": "18-24",
          "uv": 31.47,
          "pv": 2400,
          "fill": "#8884d8"
        },
        {
          "name": "25-29",
          "uv": 26.69,
          "pv": 4567,
          "fill": "#83a6ed"
        },
        {
          "name": "30-34",
          "uv": -15.69,
          "pv": 1398,
          "fill": "#8dd1e1"
        },
        {
          "name": "35-39",
          "uv": 8.22,
          "pv": 9800,
          "fill": "#82ca9d"
        },
        {
          "name": "40-49",
          "uv": -8.63,
          "pv": 3908,
          "fill": "#a4de6c"
        },
        {
          "name": "50+",
          "uv": -2.63,
          "pv": 4800,
          "fill": "#d0ed57"
        },
        {
          "name": "unknow",
          "uv": 6.67,
          "pv": 4800,
          "fill": "#ffc658"
        }
      ]
    return (
        <div>
            <h5>Dashboard</h5>
            <div class="row g-6 mb-6 mt-4">
                <div class="col-xl-3 col-sm-12 col-12">
                    <div class="card shadow border-0">
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <span class="h6 font-semibold text-muted text-sm d-block mb-2">Budget</span>
                                    <span class="h3 font-bold mb-0">$750.90</span>
                                </div>
                                <div class="col-auto">
                                    <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                        <i class="bi bi-credit-card"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-2 mb-0 text-sm">
                                <span class="badge badge-pill bg-soft-success text-success me-2">
                                    <i class="bi bi-arrow-up me-1"></i>13%
                                </span>
                                <span class="text-nowrap text-xs text-muted">Since last month</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card shadow border-0">
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <span class="h6 font-semibold text-muted text-sm d-block mb-2">New projects</span>
                                    <span class="h3 font-bold mb-0">215</span>
                                </div>
                                <div class="col-auto">
                                    <div class="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                        <i class="bi bi-people"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-2 mb-0 text-sm">
                                <span class="badge badge-pill bg-soft-success text-success me-2">
                                    <i class="bi bi-arrow-up me-1"></i>30%
                                </span>
                                <span class="text-nowrap text-xs text-muted">Since last month</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card shadow border-0">
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <span class="h6 font-semibold text-muted text-sm d-block mb-2">Total hours</span>
                                    <span class="h3 font-bold mb-0">1.400</span>
                                </div>
                                <div class="col-auto">
                                    <div class="icon icon-shape bg-info text-white text-lg rounded-circle">
                                        <i class="bi bi-clock-history"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-2 mb-0 text-sm">
                                <span class="badge badge-pill bg-soft-danger text-danger me-2">
                                    <i class="bi bi-arrow-down me-1"></i>-5%
                                </span>
                                <span class="text-nowrap text-xs text-muted">Since last month</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-12">
                    <div class="card shadow border-0">
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <span class="h6 font-semibold text-muted text-sm d-block mb-2">Work load</span>
                                    <span class="h3 font-bold mb-0">95%</span>
                                </div>
                                <div class="col-auto">
                                    <div class="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                        <i class="bi bi-minecart-loaded"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-2 mb-0 text-sm">
                                <span class="badge badge-pill bg-soft-success text-success me-2">
                                    <i class="bi bi-arrow-up me-1"></i>10%
                                </span>
                                <span class="text-nowrap text-xs text-muted">Since last month</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row align-items-center'>
    <div className='col-lg-6 col-md-6 col-sm-12'>
        <LineChart
            width={500}
            height={250}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
    </div>
    <div className='col-lg-6 col-md-6 col-sm-12'>
        <RadialBarChart
            width={500} // Adjusted width for consistency
            height={450}
            innerRadius="10%"
            outerRadius="80%"
            data={data1}
            startAngle={180}
            endAngle={0}
        >
            <RadialBar
                minAngle={15}
                label={{ fill: '#666', position: 'insideStart' }}
                background
                clockWise={true}
                dataKey='uv'
            />
            <Legend
                iconSize={10}
                width={120}
                height={140}
                layout='vertical'
                verticalAlign='middle'
                align="right"
            />
            <Tooltip />
        </RadialBarChart>
    </div>
</div>

        </div>
    )
}

export default Dashboard