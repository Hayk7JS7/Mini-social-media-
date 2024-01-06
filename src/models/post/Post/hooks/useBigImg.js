import { useState } from "react"

export const useBigImg = () => {
    const [bigScreenImg, setBigScreenImg] = useState(false)

    const handleOpenBigScreenImg = () => {
        setBigScreenImg(true)
      }
    
      const handleCloseBigScreenImg = () => {
        setBigScreenImg(false)
      }

    return { bigScreenImg, handleOpenBigScreenImg, handleCloseBigScreenImg }
}
