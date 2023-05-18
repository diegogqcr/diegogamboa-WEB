import ImageNext from 'next/image'
import { useState } from 'react'

import { ImageProps } from './image.types'

export function Image({
  defaultImage,
  src = '',
  className,
  height,
  width,
  alt,

}: ImageProps) {
  const [image, setImage] = useState(src || defaultImage)
  return (
    <ImageNext
      className={className}
      src={image}
      alt={alt}
    //   height={height}
    //   width={width}
      onErrorCapture={() => setImage(defaultImage)}

    />
  )
}
