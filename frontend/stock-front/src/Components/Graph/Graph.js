import React from "react";
import { Line } from 'react-chartjs-2'; 
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
const Graph = (props) => {
    const data = {
        labels: ['1','2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
        datasets: [
          {
            label: "Open Price",
            data: props.open  ,
            fill: true,
            backgroundColor: "rgba(75,192,192,0.5)",
            borderColor: "blue"
          },
          {
            label: "Close Price",
            data: props.close,
            fill: true,
            backgroundColor: "rgba(175,12,192,0.2)",
            borderColor: "red"
          }
        ]
      };

    return ( 
    < div  >
        <Line style={{ borderColor: "5px red" ,margin: ''}}
            data={data} 
            height={400} 
            width={100}
            options = {{
                maintainAspectRatio: false
            }} 
        />
    </div> );
}
 
export default Graph;