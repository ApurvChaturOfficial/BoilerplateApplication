import React from "react"

import { BasicBarChartComponent } from "./component/BasicBarChartComponent";
import { HorizontalBarChartComponent } from "./component/HorizontalBarChartComponent";
import { MultipleBarChartComponent } from "./component/MultipleBarChartComponent";
import { LabelBarChartComponent } from "./component/LabelBarChartComponent";
import { CustomLabeledBarChartComponent } from "./component/CustomLabeledBarChartComponent";
import { MixedBarChartComponent } from "./component/MixedBarChartComponent";
import { StackedLegendBarChartComponent } from "./component/StackedLegendBarChartComponent";
import { ActiveBarChartComponent } from "./component/ActiveBarChartComponent";
import { NegativeBarChartComponent } from "./component/NegativeBarChartComponent";
import { InteractiveBarChartComponent } from "./component/InteractiveBarChartComponent";


const BarChartListComponent = () => {
  // JSX
  return (
    <React.Fragment>
      {/* BarChartListComponent */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-2" >
        <BasicBarChartComponent />
        <HorizontalBarChartComponent />
        <MultipleBarChartComponent />
        <LabelBarChartComponent />
        <CustomLabeledBarChartComponent />
        <MixedBarChartComponent />
        <StackedLegendBarChartComponent />
        <ActiveBarChartComponent />
        <NegativeBarChartComponent />
      </div>

      <div className="p-4 gap-2" >
        <InteractiveBarChartComponent />
      </div>

    </React.Fragment>
  )
}

export default BarChartListComponent;
