import React from "react"

import { BasicRadialChartComponent } from "./component/BasicRadialChartComponent";
import { LabelRadialChartComponent } from "./component/LabelRadialChartComponent";
import { GridRadialChartComponent } from "./component/GridRadialChartComponent";
import { TextRadialChartComponent } from "./component/TextRadialChartComponent";
import { ShapeRadialChartComponent } from "./component/ShapeRadialChartComponent";
import { StackedRadialChartComponent } from "./component/StackedRadialChartComponent";


const RadialChartListComponent = () => {
  // JSX
  return (
    <React.Fragment>
      {/* RadialChartListComponent */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-2" >
        <BasicRadialChartComponent />
        <LabelRadialChartComponent />
        <GridRadialChartComponent />
        <TextRadialChartComponent />
        <ShapeRadialChartComponent />
        <StackedRadialChartComponent />
      </div>

    </React.Fragment>
  )
}

export default RadialChartListComponent;
