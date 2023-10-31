import React from "react"

type Props = {
  children: React.ReactNode
}

const Modal = (props: Props) => {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen bg-slate-500/50 flex items-center justify-center">
      <div className="max-w-sm max-h-full">
        {props.children}
      </div>
    </div>
  )
}

export default Modal