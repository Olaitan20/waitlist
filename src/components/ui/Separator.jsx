"use client"

import React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

function Separator(props) {
  const {
    className = "",
    orientation = "horizontal",
    decorative = true,
    ...rest
  } = props

  // Default styles for both orientations
  const baseClass =
    "bg-border shrink-0 " +
    (orientation === "horizontal"
      ? "h-px w-full"
      : "h-full w-px")

  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      className={`${baseClass} ${className}`}
      {...rest}
    />
  )
}

export { Separator }
