import React from "react";

export function Circle({ style, className, size = 30 }) {
    return (
        <svg width={size} height={size} stroke="currentColor" viewBox="0 0 24 24" style={style} className={className}>
            <g>
                <circle cx="12" cy="12" r="9.5" fill="none" stroke-width="2" stroke-linecap="round">
                    {[
                        {
                            attribute: "dasharray",
                            values: "0 150;42 150;42 150;42 150",
                        },
                        {
                            attribute: "dashoffset",
                            values: "0;-16;-59;-59",
                        },
                    ].map(({ attribute, values }) => (
                        <animate
                            key={attribute}
                            attributeName={`stroke-${attribute}`}
                            values={values}
                            dur="1.5s"
                            calcMode="spline"
                            keyTimes="0;0.475;0.95;1"
                            keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                            repeatCount="indefinite"
                        />
                    ))}
                </circle>
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    dur="2s"
                    values="0 12 12;360 12 12"
                    repeatCount="indefinite"
                />
            </g>
        </svg>
    );
}

export function Dots({ style, className, size = 30 }) {
    return (
        <svg width={size * 2} height={size} viewBox="0 0 24 12" class={className} style={style}>
            {[1, 2, 3].map((number) => {
                const cx = number * 6;
                const beginn = Math.round((100 / 3) * (number - 1)) / 100;
                return (
                    <circle cx={cx} cy="6" r="0" fill="currentColor">
                        <animate
                            attributeName="r"
                            begin={beginn}
                            calcMode="spline"
                            dur="1.5s"
                            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                            repeatCount="indefinite"
                            values="0;2;0;0"
                        ></animate>
                    </circle>
                );
            })}
        </svg>
    );
}
