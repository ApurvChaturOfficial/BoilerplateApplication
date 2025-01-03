import React from "react"

import { BasicLineChartComponent } from "./component/BasicLineChartComponent";
import { LinearLineChartComponent } from "./component/LinearLineChartComponent";
import { StepLineChartComponent } from "./component/StepLineChartComponent";
import { MultipleLineChartComponent } from "./component/MultipleLineChartComponent";
import { DotsLineChartComponent } from "./component/DotsLineChartComponent";
import { CustomDotsLineChartComponent } from "./component/CustomDotsLineChartComponent";
import { DotColorsLineChartComponent } from "./component/DotColorsLineChartComponent";
import { LabelLineChartComponent } from "./component/LabelLineChartComponent";
import { CustomLabelLineChartComponent } from "./component/CustomLabelLineChartComponent";
import { InteractiveLineChartComponent } from "./component/InteractiveLineChartComponent";


const LineChartListComponent = () => {
  // JSX
  return (
    <React.Fragment>
      {/* LineChartListComponent */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-2" >
        <BasicLineChartComponent />
        <LinearLineChartComponent />
        <StepLineChartComponent />
        <MultipleLineChartComponent />
        <DotsLineChartComponent />
        <CustomDotsLineChartComponent />
        <DotColorsLineChartComponent />
        <LabelLineChartComponent />
        <CustomLabelLineChartComponent />
      </div>

      <div className="p-4 gap-2" >
        <InteractiveLineChartComponent />
      </div>

    </React.Fragment>
  )
}

export default LineChartListComponent;
