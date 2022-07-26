import './Chart.css';
import ChartBar from './ChartBar';
const Chart=props=>{
    const dataPointValues = props.dataPoints.map(dataPoint1 => dataPoint1.value);
   const totalMaximum=Math.max(...dataPointValues)

    return <div className="chart">
        {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          max={totalMaximum}
          label={dataPoint.label}
        />
      ))}
       
    </div>
}
export default Chart;