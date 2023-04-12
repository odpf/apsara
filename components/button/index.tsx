import { styled } from "~/stitches.config";

export const Button = styled("button", {
    // Reset
    all: "unset",
    alignItems: "center",
    boxSizing: "border-box",
    userSelect: "none",
    "&::before": {
        boxSizing: "border-box",
    },
    "&::after": {
        boxSizing: "border-box",
    },

    // Custom reset?
    display: "inline-flex",
    flexShrink: 0,
    justifyContent: "center",
    lineHeight: "1",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",

    // Custom
    height: "$25",
    px: "$10",
    fontSize: "$3",
    fontWeight: 500,

    "&:disabled": {
        backgroundColor: "$slate2",
        boxShadow: "inset 0 0 0 1px $colors$slate7",
        color: "$slate8",
        pointerEvents: "none",
    },

    variants: {
        size: {
            small: {
                borderRadius: "$1",
                height: "$4",
                px: "$2",
                fontSize: "$1",
                lineHeight: "$sizes$4",
            },
            normal: {
                borderRadius: "$1",
                height: "$5",
                px: "$3",
                fontSize: "$2",
                lineHeight: "$sizes$5",
            },
            large: {
                borderRadius: "$1",
                height: "$6",
                px: "$4",
                fontSize: "$4",
                lineHeight: "$sizes$6",
            },
        },
        variant: {
            primary: {
                backgroundColor: "$violet9",
                boxShadow: "inset 0 0 0 1px $colors$violet9",
                color: "$gray1",
                "@hover": {
                    "&:hover": {
                        boxShadow: "inset 0 0 0 1px $colors$violet10",
                    },
                },
                "&:active": {
                    backgroundColor: "$violet10",
                    boxShadow: "inset 0 0 0 1px $colors$violet8",
                },
                "&:focus": {
                    boxShadow: "inset 0 0 0 1px $colors$violet8, 0 0 0 1px $colors$violet8",
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
                    {
                        backgroundColor: "$violet10",
                        boxShadow: "inset 0 0 0 1px $colors$violet8",
                    },
            },
            secondary: {
                backgroundColor: "$loContrast",
                boxShadow: "inset 0 0 0 1px $colors$slate7",
                color: "$hiContrast",
                "@hover": {
                    "&:hover": {
                        boxShadow: "inset 0 0 0 1px $colors$slate8",
                    },
                },
                "&:active": {
                    backgroundColor: "$slate2",
                    boxShadow: "inset 0 0 0 1px $colors$slate8",
                },
                "&:focus": {
                    boxShadow: "inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8",
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
                    {
                        backgroundColor: "$slate4",
                        boxShadow: "inset 0 0 0 1px $colors$slate8",
                    },
            },
            gray: {
                backgroundColor: "$loContrast",
                boxShadow: "inset 0 0 0 1px $colors$slate7",
                color: "$gray11",
                "@hover": {
                    "&:hover": {
                        boxShadow: "inset 0 0 0 1px $colors$slate8",
                    },
                },
                "&:active": {
                    backgroundColor: "$slate2",
                    boxShadow: "inset 0 0 0 1px $colors$slate8",
                },
                "&:focus": {
                    boxShadow: "inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8",
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
                    {
                        backgroundColor: "$slate4",
                        boxShadow: "inset 0 0 0 1px $colors$slate8",
                    },
            },
        },
    },

    defaultVariants: {
        size: "normal",
        variant: "gray",
    },
});

export const IconButton = styled("button", {
    // Reset
    alignItems: "center",
    appearance: "none",
    borderWidth: "0",
    boxSizing: "border-box",
    display: "inline-flex",
    flexShrink: 0,
    fontFamily: "inherit",
    fontSize: "$3",
    justifyContent: "center",
    lineHeight: "1",
    outline: "none",
    padding: "0",
    textDecoration: "none",
    userSelect: "none",
    WebkitTapHighlightColor: "transparent",
    color: "$hiContrast",
    "&::before": {
        boxSizing: "border-box",
    },
    "&::after": {
        boxSizing: "border-box",
    },
    backgroundColor: "$loContrast",
    border: "1px solid $slate7",
    "@hover": {
        "&:hover": {
            borderColor: "$slate8",
        },
    },
    "&:active": {
        backgroundColor: "$slate2",
    },
    "&:focus": {
        borderColor: "$slate8",
        boxShadow: "0 0 0 1px $colors$slate8",
    },
    "&:disabled": {
        pointerEvents: "none",
        backgroundColor: "transparent",
        color: "$slate6",
    },

    variants: {
        size: {
            "1": {
                borderRadius: "$1",
                height: "$5",
                width: "$5",
            },
            "2": {
                borderRadius: "$2",
                height: "$6",
                width: "$6",
            },
            "3": {
                borderRadius: "$2",
                height: "$7",
                width: "$7",
            },
            "4": {
                borderRadius: "$3",
                height: "$8",
                width: "$8",
            },
        },
        variant: {
            ghost: {
                backgroundColor: "transparent",
                borderWidth: "0",
                "@hover": {
                    "&:hover": {
                        backgroundColor: "$slateA3",
                    },
                },
                "&:focus": {
                    boxShadow: "inset 0 0 0 1px $colors$slateA8, 0 0 0 1px $colors$slateA8",
                },
                "&:active": {
                    backgroundColor: "$slateA4",
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
                    {
                        backgroundColor: "$slateA4",
                    },
            },
            raised: {
                boxShadow: "0 0 transparent, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)",
                "@hover": {
                    "&:hover": {
                        boxShadow:
                            "0 0 transparent, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)",
                    },
                },
                "&:focus": {
                    borderColor: "$slate8",
                    boxShadow:
                        "0 0 0 1px $colors$slate8, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)",
                },
                "&:active": {
                    backgroundColor: "$slate4",
                },
            },
        },
        state: {
            active: {
                backgroundColor: "$slate4",
                boxShadow: "inset 0 0 0 1px hsl(206,10%,76%)",
                "@hover": {
                    "&:hover": {
                        boxShadow: "inset 0 0 0 1px hsl(206,10%,76%)",
                    },
                },
                "&:active": {
                    backgroundColor: "$slate4",
                },
            },
            waiting: {
                backgroundColor: "$slate4",
                boxShadow: "inset 0 0 0 1px hsl(206,10%,76%)",
                "@hover": {
                    "&:hover": {
                        boxShadow: "inset 0 0 0 1px hsl(206,10%,76%)",
                    },
                },
                "&:active": {
                    backgroundColor: "$slate4",
                },
            },
        },
    },
    defaultVariants: {
        size: "1",
        variant: "ghost",
    },
});