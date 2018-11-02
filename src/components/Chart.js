import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import { round, sum } from 'lodash';

function average(data) {
  return round(sum(data)/data.length);
}

const Chart = ({ data, color, unit}) => (
  <div>
    <Sparklines key={"temp"} height={120} width={180} data={data}>
      <SparklinesLine color={color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div>
      {average(data)} {unit}
    </div>
  </div>
);

export default Chart;
