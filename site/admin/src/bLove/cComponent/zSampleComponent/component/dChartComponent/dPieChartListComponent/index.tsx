import React from "react"

import { BasicPieChartComponent } from "./component/BasicPieChartComponent";
import { SeperatorNonePieChartComponent } from "./component/SeperatorNonePieChartComponent";
import { LabelPieChartComponent } from "./component/LabelPieChartComponent";
import { CustomLabelPieChartComponent } from "./component/CustomLabelPieChartComponent";
import { LabelListPieChartComponent } from "./component/LabelListPieChartComponent";
import { LegendPieChartComponent } from "./component/LegendPieChartComponent";
import { DonutPieChartComponent } from "./component/DonutPieChartComponent";
import { DonutActivePieChartComponent } from "./component/DonutActivePieChartComponent";
import { DonutWithTextPieChartComponent } from "./component/DonutWithTextPieChartComponent";
import { StackedPieChartComponent } from "./component/StackedPieChartComponent";
import { InteractivePieChartComponent } from "./component/InteractivePieChartComponent";


const PieChartListComponent = () => {
  // JSX
  return (
    <React.Fragment>
      {/* PieChartListComponent */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-2" >
        <BasicPieChartComponent />
        <SeperatorNonePieChartComponent />
        <LabelPieChartComponent />
        <CustomLabelPieChartComponent />
        <LabelListPieChartComponent />
        <LegendPieChartComponent />
        <DonutPieChartComponent />
        <DonutActivePieChartComponent />
        <DonutWithTextPieChartComponent />
        <StackedPieChartComponent />
        <InteractivePieChartComponent />
      </div>

    </React.Fragment>
  )
}

export default PieChartListComponent;
