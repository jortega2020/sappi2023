import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { data2, barSettings } from './BarConfig';

export default class extends Component {
  render() {
    return (
      <div>
        <Bar
          data={data2}
          width={barSettings.width}
          height={barSettings.height}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}
