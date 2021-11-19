import { useState } from "react"
import Section from "./Style/Section"

// TODO: Update Styles 

const EditableTextArea = ({styles}) => {
  const [currentState, updateState] = useState({
    value: "view",
    desc: {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nisl nunc ultrices eros, eu porttitor nisl nunc euismod nunc.",
    },
    oldDesc: {
      text: "",
    },
  })

  const DescriptionStyles = styles

  let description = (
    <textarea style={DescriptionStyles} value={currentState.desc.text} disabled/>
  )

  let editDescription = (
    <textarea
      style={DescriptionStyles}
      value={currentState.desc.text}
      onChange={e => {
        updateState({
          ...currentState,
          desc: { ...currentState.desc, text: e.target.value },
        })
      }}
    />
  )

  let editButton = (
    <div style={{ display: "flex", justifyContent: "end", marginRight:"20px"}}>
      <button
        onClick={e => {
          updateState({
            ...currentState,
            value: "edit",
            oldDesc: {
              ...currentState.oldDesc,
              text: currentState.desc.text,
            },
          })
        }}
      >
        edit
      </button>
    </div>
  )

  if (currentState.value === "edit") {
    editButton = undefined
    description = undefined
  }

  let saveAndCancelButtons = (
    <div style={{ display: "flex", justifyContent: "end", marginRight:"20px" }}>
      <button
        onClick={e => {
          updateState({
            ...currentState,
            value: "view",
          })
        }}
      >
        save
      </button>
      <button
        onClick={e => {
          updateState({
            ...currentState,
            value: "view",
            desc: {
              ...currentState.desc,
              text: currentState.oldDesc.text,
            },
          })
        }}
      >
        cancel
      </button>
    </div>
  )

  if (currentState.value === "view") {
    saveAndCancelButtons = undefined
    editDescription = undefined
  }

  return (
    <div style={{width:"100%"}}>
      <Section>
        {description}
        {editDescription}
      </Section>
      {editButton}
      {saveAndCancelButtons}
    </div>
  )
}

export default EditableTextArea
