import React from 'react';
import { Chart } from "react-google-charts";
import './compareChart.scss';

function compareChart({data}) {
    return(
        <div id="compare-chart-wrapper">
            <Chart
                height={'300px'}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={data}
                options={{
                    // Material design options
                    chart: {
                    title: 'Comparision Chart',
                    subtitle: 'Price compared with all products in cart',
                    },
                }}
                // For tests
                rootProps={{ 'data-testid': '2' }}
            />
        </div>
    )
}

export default compareChart;