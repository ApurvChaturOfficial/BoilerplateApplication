import React from "react"

import { BasicAreaChartComponent } from "./component/BasicAreaChartComponent";
import { LinearAreaChartComponent } from "./component/LinearAreaChartComponent";
import { StepAreaChartComponent } from "./component/StepAreaChartComponent";
import { StackedAreaChartComponent } from "./component/StackedAreaChartComponent";
import { StackedExpandedAreaChartComponent } from "./component/StackedExpandedAreaChartComponent";
import { LegendAreacChartComponent } from "./component/LegendAreaChartComponent";
import { IconsAreaChartComponent } from "./component/IconsAreaChartComponent";
import { GradientAreaChartComponent } from "./component/GradientAreaChartComponent";
import { AxesAreaChartComponent } from "./component/AxesAreaChartComponent";
import { InteractiveAreaChartComponent } from "./component/InteractiveAreaChartComponent";


const AreaChartListComponent = () => {
  // JSX
  return (
    <React.Fragment>
      {/* AreaChartListComponent */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-2" >
        <BasicAreaChartComponent />
        <LinearAreaChartComponent />
        <StepAreaChartComponent />
        <StackedAreaChartComponent />
        <StackedExpandedAreaChartComponent />
        <LegendAreacChartComponent />
        <IconsAreaChartComponent />
        <GradientAreaChartComponent />
        <AxesAreaChartComponent />
      </div>

      <div className="p-4 gap-2" >
        <InteractiveAreaChartComponent />
      </div>

    </React.Fragment>
  )
}

export default AreaChartListComponent;
