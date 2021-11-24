import { useState } from "react"
import Section from "./Style/Section"

// TODO: Update Styles 

const EditableTextArea = ({styles, content, saveClickFunction, saveFunctionArgs}) => {
  const [currentState, updateState] = useState({
    value: "view",
    desc: {
      text: content,
    },
    oldDesc: {
      text: content,
    },
  })

  const DescriptionStyles = styles

  const ButtonStyles = {
    marginLeft: '80%', 
    paddingTop: '10px'
  }

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
    <div style={ButtonStyles}>
      {console.log("function: " + saveClickFunction)} 
      {console.log("args: " + JSON.stringify(saveFunctionArgs))}
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
    <div style={ButtonStyles}>
      <button
        onClick={e => {
          updateState({
            ...currentState,
            value: "view",
          })
          if(saveFunctionArgs && saveClickFunction){
            saveFunctionArgs.description = currentState.desc.text
            saveClickFunction(saveFunctionArgs)
          }
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
