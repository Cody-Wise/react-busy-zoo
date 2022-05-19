import React from 'react';
import { VictoryBar, VictoryChart, VictoryPie, VictoryTheme } from 'victory';
import './App.css';

export default function MyCharts() {
  return (
    <>
      <div className="chart">
        <VictoryChart domainPadding={40} theme={VictoryTheme.material}>
          <VictoryBar
            width={500}
            data={[
              { new_Subscribers: 1, amount: 100000 },
              { new_Subscribers: 2, amount: 110000 },
              { new_Subscribers: 3, amount: 150000 },
              { new_Subscribers: 4, amount: 210000 },
            ]}
            x="new_Subscribers"
            y="amount"
          />
        </VictoryChart>
      </div>
      <div className="chart">
        <VictoryPie
          width={500}
          colorScale={['blue', 'red', 'green', 'cyan']}
          data={[
            { new_Subscribers: 'Spring', amount: 100000 },
            { new_Subscribers: 'Summer', amount: 110000 },
            { new_Subscribers: 'Fall', amount: 150000 },
            { new_Subscribers: 'Winter', amount: 210000 },
          ]}
          x="new_Subscribers"
          y="amount"
        />
      </div>
    </>
  );
}
