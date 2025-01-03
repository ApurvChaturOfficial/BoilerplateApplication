import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type TypicalListComponentType = {
  header: { title: string, subtitle: string, buttons: { text: string, to: string }[] },
  data: any,
}

const BaseCreateComponent = (props: TypicalListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* BaseCreateComponent */}
      <TypicalCreateComponent header={props.header} data={props.data} />
    </React.Fragment>
  )
}

export default BaseCreateComponent;
