import React from "react"

import { DefaultTooltipComponent } from "./component/DefaultTooltipComponent";
import { LineIndicatorTooltipComponent } from "./component/LineIndicatorTooltipComponent";
import { NoIndicatorTooltipComponent } from "./component/NoIndicatorTooltipComponent";
import { CustomLabelTooltipComponent } from "./component/CustomLabelTooltipComponent";
import { LabelFormatterTooltipComponent } from "./component/LabelFormatterTooltipComponent";
import { NoLabelTooltipComponent } from "./component/NoLabelTooltipComponent";
import { FormatterTooltipComponent } from "./component/FormatterTooltipComponent";
import { IconsTooltipComponent } from "./component/IconsTooltipComponent";
import { AdvancedTooltipComponent } from "./component/AdvancedTooltipComponent";


const TooltipListComponent = () => {
  // JSX
  return (
    <React.Fragment>
      {/* TooltipListComponent */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-2" >
        <DefaultTooltipComponent />
        <LineIndicatorTooltipComponent />
        <NoIndicatorTooltipComponent />
        <CustomLabelTooltipComponent />
        <LabelFormatterTooltipComponent />
        <NoLabelTooltipComponent />
        <FormatterTooltipComponent />
        <IconsTooltipComponent />
        <AdvancedTooltipComponent />
      </div>

    </React.Fragment>
  )
}

export default TooltipListComponent;
