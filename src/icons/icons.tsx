import React from "react"

export const Cart = ({
  height = "24px",
  width = "24px",
  color = "black",
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth={2}
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
    />
  </svg>
)