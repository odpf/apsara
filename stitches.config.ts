import * as colors from "@radix-ui/colors";
import type * as Stitches from "@stitches/react";
import { createStitches } from "@stitches/react";

const primary = {
    primary1: "#FDFDFE",
    primary2: "#F8FAFF",
    primary3: "#F0F4FF",
    primary4: "#E6EDFE",
    primary5: "#D9E2FC",
    primary6: "#C6D4F9",
    primary7: "#AEC0F5",
    primary8: "#8DA4EF",
    primary9: "#3E63DD",
    primary10: "#3A5CCC",
    primary11: "#3451B2",
    primary12: "#101D46",
};
const primaryA = {
    primary1: "#131620",
    primary2: "#15192D",
    primary3: "#192140",
    primary4: "#1C274F",
    primary5: "#1F2C5C",
    primary6: "#22346E",
    primary7: "#273E89",
    primary8: "#2F4EB2",
    primary9: "#3E63DD",
    primary10: "#5373E7",
    primary11: "#849DFF",
    primary12: "#EEF1FD",
};
export const { styled, css, theme, createTheme, getCssText, globalCss, keyframes, config, reset } = createStitches({
    prefix: "apsara",
    theme: {
        colors: {
            ...colors.gray,
            ...colors.mauve,
            ...colors.slate,
            ...colors.sage,
            ...colors.olive,
            ...colors.sand,
            ...colors.tomato,
            ...colors.red,
            ...colors.crimson,
            ...colors.pink,
            ...colors.plum,
            ...colors.purple,
            ...colors.violet,
            ...colors.indigo,
            ...colors.blue,
            ...colors.sky,
            ...colors.mint,
            ...colors.cyan,
            ...colors.teal,
            ...colors.green,
            ...colors.grass,
            ...colors.lime,
            ...colors.yellow,
            ...colors.amber,
            ...colors.orange,
            ...colors.brown,
            ...colors.bronze,
            ...colors.gold,
            ...colors.grayA,
            ...colors.mauveA,
            ...colors.slateA,
            ...colors.sageA,
            ...colors.oliveA,
            ...colors.sandA,
            ...colors.tomatoA,
            ...colors.redA,
            ...colors.crimsonA,
            ...colors.pinkA,
            ...colors.plumA,
            ...colors.purpleA,
            ...colors.violetA,
            ...colors.indigoA,
            ...colors.blueA,
            ...colors.skyA,
            ...colors.mintA,
            ...colors.cyanA,
            ...colors.tealA,
            ...colors.greenA,
            ...colors.grassA,
            ...colors.limeA,
            ...colors.yellowA,
            ...colors.amberA,
            ...colors.orangeA,
            ...colors.brownA,
            ...colors.bronzeA,
            ...colors.goldA,
            ...colors.whiteA,
            ...colors.blackA,
            ...primary,

            // Semantic colors
            hiContrast: "$slate12",
            loContrast: "white",
            canvas: "hsl(0 0% 93%)",
            panel: "white",
            transparentPanel: "hsl(0 0% 0% / 97%)",
            shadowLight: "hsl(206 22% 7% / 35%)",
            shadowDark: "hsl(206 22% 7% / 20%)",

            // apsara color
            // forground
            fgBase: "#3C4347",
            fgMuted: "#687076",
            fgSubtle: "#7E868C",
            fgInverted: "#FBFCFD",
            fgAccent: "#3E63DD",
            fgAttention: "#FFB224",
            fgDanger: "#E5484D",
            fgSuccess: "#30A46C",

            // background
            bgBase: "#FBFCFD",
            bgBaseHover: "#F1F3F5",
            bgInset: "#F1F3F5",
            bgSubtle: "#F8F9FA",
            bgInverted: "#3C4347",
            bgAccent: "#E6EDFE",
            bgAccentInverted: "#3E63DD",
            bgAccentInvertedHover: "#3A5CCC",
            bgAttention: "#FFECBC",
            bgAttentionInverted: "#FFB224",
            bgDanger: "#FFE5E5",
            bgDangerInverted: "#E5484D",
            bgDangerInvertedHover: "#DC3D43",
            bgSuccess: "#DDF3E4",
            bgSuccessInverted: "#30A46C",

            // border
            borderBase: "#D7DBDF",
            borderBaseHover: "#C1C8CD",
            borderMuted: "#DFE3E6",
            borderAccent: "#AEC0F5",
            borderSubtle: "#ECEEF0",
            borderAccentInverted: "#3E63DD",
            borderAccentInvertedHover: "#3A5CCC",

            borderAttention: "#3A5CCC",
            borderAttentionInverted: "#FFB224",
            borderDanger: "#F3AEAF",
            borderDangerInverted: "#E5484D",
            borderDangerInvertedHover: "#DC3D43",
            borderSuccess: "#92CEAC",
            borderSuccessInverted: "#30A46C",
        },
        space: {
            1: "4px",
            2: "8px",
            3: "12px",
            4: "16px",
            5: "20px",
            6: "24px",
            7: "28px",
            8: "32px",
            9: "36px",
            10: "52px",
            11: "64px",
        },
        sizes: {
            1: "4px",
            2: "8px",
            3: "12px",
            4: "16px",
            5: "20px",
            6: "24px",
            7: "28px",
            8: "32px",
            9: "36px",
            10: "52px",
            11: "64px",
        },
        radii: {
            1: "4px",
            2: "6px",
            3: "8px",
            4: "12px",
            round: "50%",
            pill: "9999px",
        },
        zIndices: {
            1: "100",
            2: "200",
            3: "300",
            4: "400",
            max: "999",
        },
        fonts: {
            inter: '"Inter", -apple-system, system-ui, sans-serif',
            mono: "Söhne Mono, menlo, monospace",
        },
        fontSizes: {
            1: "11px",
            2: "12px",
            3: "13px",
            4: "14px",
            5: "16px",
            6: "18px",
            7: "20px",
            8: "22px",
            9: "24px",
            10: "28px",
            11: "32px",
            12: "36px",
            13: "45px",
            14: "64px",
        },
        fontWeights: {
            default: 400,
            500: 500,
            600: 600,
            700: 700,
        },
        lineHeights: {
            1: "1.5",
        },
        letterSpacings: {},
        borderWidths: {},
        borderStyles: {},
        shadows: {},
        transitions: {},
    },
    media: {
        bp1: "(min-width: 520px)",
        bp2: "(min-width: 900px)",
        bp3: "(min-width: 1200px)",
        bp4: "(min-width: 1800px)",
        motion: "(prefers-reduced-motion)",
        hover: "(any-hover: hover)",
        dark: "(prefers-color-scheme: dark)",
        light: "(prefers-color-scheme: light)",
    },
    utils: {
        px: (value: Stitches.PropertyValue<"paddingLeft">) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
        py: (value: Stitches.PropertyValue<"paddingTop">) => ({
            paddingTop: value,
            paddingBottom: value,
        }),
        mx: (value: Stitches.PropertyValue<"marginLeft">) => ({
            marginLeft: value,
            marginRight: value,
        }),
        my: (value: Stitches.PropertyValue<"marginTop">) => ({
            marginTop: value,
            marginBottom: value,
        }),
        userSelect: (value: Stitches.PropertyValue<"userSelect">) => ({
            WebkitUserSelect: value,
            userSelect: value,
        }),
        size: (value: Stitches.PropertyValue<"width">) => ({
            width: value,
            height: value,
        }),
        appearance: (value: Stitches.PropertyValue<"appearance">) => ({
            WebkitAppearance: value,
            appearance: value,
        }),
        backgroundClip: (value: Stitches.PropertyValue<"backgroundClip">) => ({
            WebkitBackgroundClip: value,
            backgroundClip: value,
        }),
    },
});

export const dark = createTheme("dark", {
    colors: {
        ...colors.grayDark,
        ...colors.mauveDark,
        ...colors.slateDark,
        ...colors.sageDark,
        ...colors.oliveDark,
        ...colors.sandDark,
        ...colors.tomatoDark,
        ...colors.redDark,
        ...colors.crimsonDark,
        ...colors.pinkDark,
        ...colors.plumDark,
        ...colors.purpleDark,
        ...colors.violetDark,
        ...colors.indigoDark,
        ...colors.blueDark,
        ...colors.skyDark,
        ...colors.mintDark,
        ...colors.cyanDark,
        ...colors.tealDark,
        ...colors.greenDark,
        ...colors.grassDark,
        ...colors.limeDark,
        ...colors.yellowDark,
        ...colors.amberDark,
        ...colors.orangeDark,
        ...colors.brownDark,
        ...colors.bronzeDark,
        ...colors.goldDark,
        ...colors.grayDarkA,
        ...colors.mauveDarkA,
        ...colors.slateDarkA,
        ...colors.sageDarkA,
        ...colors.oliveDarkA,
        ...colors.sandDarkA,
        ...colors.tomatoDarkA,
        ...colors.redDarkA,
        ...colors.crimsonDarkA,
        ...colors.pinkDarkA,
        ...colors.plumDarkA,
        ...colors.purpleDarkA,
        ...colors.violetDarkA,
        ...colors.indigoDarkA,
        ...colors.blueDarkA,
        ...colors.skyDarkA,
        ...colors.mintDarkA,
        ...colors.cyanDarkA,
        ...colors.tealDarkA,
        ...colors.greenDarkA,
        ...colors.grassDarkA,
        ...colors.limeDarkA,
        ...colors.yellowDarkA,
        ...colors.amberDarkA,
        ...colors.orangeDarkA,
        ...colors.brownDarkA,
        ...colors.bronzeDarkA,
        ...colors.goldDarkA,
        ...primaryA,

        // Semantic colors
        hiContrast: "$slate12",
        loContrast: "$slate1",
        canvas: "hsl(0 0% 15%)",
        panel: "$slate3",
        transparentPanel: "hsl(0 100% 100% / 97%)",
        shadowLight: "hsl(206 22% 7% / 35%)",
        shadowDark: "hsl(206 22% 7% / 20%)",
    },
});

type CSS = Stitches.CSS<typeof config>;
type StitchesConfig = typeof config;
type ScaleValue<TValue> = Stitches.ScaleValue<TValue, StitchesConfig>;
export type { VariantProps } from "@stitches/react";
export type { StitchesConfig, CSS, ScaleValue };
