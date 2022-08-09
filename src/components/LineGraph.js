import React from 'react'
import { Line } from "react-chartjs"

function LineGraph() {
    const data = 
    [{
        x:10,
        y:20
    },{
        x:15,
        y:20
    }]
  return (
    <div className="linegraph">
        <Line 
            data = {{
                datasets: [
                    {
                        type: "line",
                        data: data
                    }
                ]
            }}
         />
    </div>
  )
}

export default LineGraph