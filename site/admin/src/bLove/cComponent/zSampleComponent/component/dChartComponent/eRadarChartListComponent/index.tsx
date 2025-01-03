import React from "react"

import { BasicRadarChartComponent } from "./component/BasicRadarChartComponent";
import { DotsRadarChartComponent } from "./component/DotsRadarChartComponent";
import { MultipleRadarChartComponent } from "./component/MultipleRadarChartComponent";
import { LinesOnlyRadarChartComponent } from "./component/LinesOnlyRadarChartComponent";
import { CustomLabelRadarChartComponent } from "./component/CustomLabelRadarChartComponent";
import { RadiusAxisRadarChartComponent } from "./component/RadiusAxisRadarChartComponent";
import { GridCustomRadarChartComponent } from "./component/GridCustomRadarChartComponent";
import { GridFilledRadarChartComponent } from "./component/GridFilledRadarChartComponent";
import { GridNoneRadarChartComponent } from "./component/GridNoneRadarChartComponent";
import { GridCircleRadarChartComponent } from "./component/GridCircleRadarChartComponent";
import { GridCircleNoLinesRadarChartComponent } from "./component/GridCircleNoLinesRadarChartComponent";
import { GridCircleFilledRadarChartComponent } from "./component/GridCircleFilledRadarChartComponent";
import { LegendRadarChartComponent } from "./component/LegendRadarChartComponent";
import { IconsRadarChartComponent } from "./component/IconsRadarChartComponent";


const RadarChartListComponent = () => {
  // JSX
  return (
    <React.Fragment>
      {/* RadarChartListComponent */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-2" >
        <BasicRadarChartComponent />
        <DotsRadarChartComponent />
        <MultipleRadarChartComponent />
        <LinesOnlyRadarChartComponent />
        <CustomLabelRadarChartComponent />
        <RadiusAxisRadarChartComponent />
        <GridCustomRadarChartComponent />
        <GridFilledRadarChartComponent />
        <GridNoneRadarChartComponent />
        <GridCircleRadarChartComponent />
        <GridCircleNoLinesRadarChartComponent />
        <GridCircleFilledRadarChartComponent />
        <LegendRadarChartComponent />
        <IconsRadarChartComponent />
      </div>

    </React.Fragment>
  )
}

export default RadarChartListComponent;
