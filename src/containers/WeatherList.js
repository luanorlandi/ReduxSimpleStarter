import React, { Component } from 'react';
import { connect } from 'react-redux';

import GoogleMap from '../components/GoogleMap';
import Chart from '../components/Chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lat, lon } = cityData.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lat={lat} lng={lon} /></td>
        <td>
          <Chart data={temps} color={'red'} unit="K" />
        </td>
        <td>
          <Chart data={pressures} color={'black'} unit="hPa" />
        </td>
        <td>
          <Chart data={humidities} color={'blue'} unit="%" />
        </td>
      </tr>
    );
  }

  render = () => {
    const { weather } = this.props;

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
