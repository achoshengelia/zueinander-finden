import React, { Suspense } from "react"

export default function SuspenseWrapper({ children }) {
  if (process.browser) return <Suspense fallback={null}>{children}</Suspense>
  return children
}
