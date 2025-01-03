import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type TypicalListComponentType = {
  header: { title: string, subtitle: string, buttons: { text: string, to: string }[] },
  data: any,
  columns: any
}

const BaseListComponent = (props: TypicalListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* BaseListComponent */}
      <TypicalListComponent header={props.header} data={props.data} columns={props.columns} />
    </React.Fragment>
  )
}

export default BaseListComponent;
