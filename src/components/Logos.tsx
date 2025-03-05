import React from "react";

export function LatentBoxLogo(props: { ext: string } & React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 709 818" fill="none" {...props}>
      <path d="M708.965 204.618L354.965 0.235352L0.964451 204.618L354.965 409L708.965 204.618Z"
        fill={`url(#paint0_linear_1_4${props.ext})`} />
      <path d="M354.979 409L0.978516 204.618L0.978507 613.382L354.979 817.765L354.979 409Z"
        fill={`url(#paint1_linear_1_4${props.ext})`} />
      <path d="M708.965 204.618L354.965 409L354.965 817.765L708.965 613.382L708.965 204.618Z"
        fill={`url(#paint2_linear_1_4${props.ext})`} />
      <path d="M531.979 306.809L354.979 204.618L177.979 306.809L354.979 409L531.979 306.809Z"
        fill={`url(#paint3_linear_1_4${props.ext})`} />
      <path d="M354.984 409L177.984 306.809L177.984 511.191L354.984 613.382L354.984 409Z"
        fill={`url(#paint4_linear_1_4${props.ext})`} />
      <path d="M531.979 306.809L354.979 409L354.979 613.382L531.979 511.191L531.979 306.809Z"
        fill={`url(#paint5_linear_1_4${props.ext})`} />
      <defs>
        <linearGradient id={"paint0_linear_1_4" + props.ext} x1="531.965" y1="102.427" x2="354.965" y2="409"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#EFEFEF" />
          <stop offset="0.0001" stopColor="#E9E9E9" />
          <stop offset="1" stopColor="#BDBDBD" />
        </linearGradient>
        <linearGradient id={"paint1_linear_1_4" + props.ext} x1="177.979" y1="306.809" x2="0.978381" y2="613.382"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#808080" />
          <stop offset="1" stopColor="#474747" />
        </linearGradient>
        <linearGradient id={"paint2_linear_1_4" + props.ext} x1="531.965" y1="306.809" x2="708.965" y2="613.382"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#BCBCBC" />
          <stop offset="1" stopColor="#565656" />
        </linearGradient>
        <linearGradient id={"paint3_linear_1_4" + props.ext} x1="443.479" y1="255.713" x2="354.978" y2="409"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#F524C7" />
          <stop offset="1" stopColor="#2400FF" />
        </linearGradient>
        <linearGradient id={"paint4_linear_1_4" + props.ext} x1="266.484" y1="357.904" x2="177.984" y2="511.191"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#00FFB3" />
          <stop offset="1" stopColor="#EBFF00" />
        </linearGradient>
        <linearGradient id={"paint5_linear_1_4" + props.ext} x1="443.479" y1="357.904" x2="531.979" y2="511.191"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF0000" />
          <stop offset="1" stopColor="#FFA800" />
        </linearGradient>
      </defs>
    </svg>

  )
}
