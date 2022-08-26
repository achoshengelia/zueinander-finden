import * as React from "react"

export function NextArrow(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.002 512.002" {...props}>
      <path d="M388.425 241.951L151.609 5.79c-7.759-7.733-20.321-7.72-28.067.04-7.74 7.759-7.72 20.328.04 28.067l222.72 222.105-222.728 222.104c-7.759 7.74-7.779 20.301-.04 28.061a19.8 19.8 0 0014.057 5.835 19.79 19.79 0 0014.017-5.795l236.817-236.155c3.737-3.718 5.834-8.778 5.834-14.05s-2.103-10.326-5.834-14.051z" />
    </svg>
  )
}

// export function DownArrow(props) {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.688 490.688" {...props}>
//       <path
//         d="M472.328 120.529L245.213 347.665 18.098 120.529c-4.237-4.093-10.99-3.975-15.083.262-3.992 4.134-3.992 10.687 0 14.82l234.667 234.667c4.165 4.164 10.917 4.164 15.083 0l234.667-234.667c4.237-4.093 4.354-10.845.262-15.083-4.093-4.237-10.845-4.354-15.083-.262-.089.086-.176.173-.262.262l-.021.001z"
//         fill="#ffc107"
//       />
//       <path d="M245.213 373.415a10.663 10.663 0 01-7.552-3.115L2.994 135.633c-4.093-4.237-3.975-10.99.262-15.083 4.134-3.992 10.687-3.992 14.82 0l227.136 227.115 227.115-227.136c4.093-4.237 10.845-4.354 15.083-.262 4.237 4.093 4.354 10.845.262 15.083-.086.089-.173.176-.262.262L252.744 370.279a10.672 10.672 0 01-7.531 3.136z" />
//     </svg>
//   )
// }

export function PreArrow(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512.002 512.002" {...props}>
      <path
        d="M123.576 270.051l236.816 236.161c7.76 7.733 20.321 7.72 28.067-.04 7.74-7.759 7.72-20.328-.04-28.067L165.7 256 388.427 33.896c7.76-7.74 7.78-20.3.04-28.06A19.8 19.8 0 00374.41 0a19.79 19.79 0 00-14.017 5.795L123.576 241.95c-3.737 3.718-5.834 8.778-5.834 14.05s2.103 10.326 5.834 14.051z"
        data-original="#000000"
        xmlns="http://www.w3.org/2000/svg"
      />
    </svg>
  )
}

export function DownArrow(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M374.108 373.328c-7.829-7.792-20.492-7.762-28.284.067L276 443.557V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v423.558l-69.824-70.164c-7.792-7.829-20.455-7.859-28.284-.067-7.83 7.793-7.859 20.456-.068 28.285l104 104.504.019.018c7.792 7.809 20.496 7.834 28.314.001l.019-.018 104-104.504c7.79-7.828 7.763-20.492-.068-28.285z" />
    </svg>
  )
}
