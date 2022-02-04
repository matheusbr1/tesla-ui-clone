import React from 'react'

interface CarModel {}

interface ModelsContext {
  wrapperRef: React.RefObject<HTMLElement>
}

export default React.createContext<ModelsContext>({} as ModelsContext)