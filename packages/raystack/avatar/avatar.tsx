import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, VariantProps } from "class-variance-authority";
import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  ReactNode,
} from "react";
import { Box } from "../box";
import styles from "./avatar.module.css";

const avatar = cva(styles.avatar, {
  variants: {
    radius: {
      small: styles["avatar-small"],
      full: styles["avatar-full"],
    },
    size: {
      1: styles["avatar-size-1"],
      2: styles["avatar-size-2"],
      3: styles["avatar-size-3"],
      4: styles["avatar-size-4"],
      5: styles["avatar-size-5"],
      6: styles["avatar-size-6"],
      7: styles["avatar-size-7"],
      8: styles["avatar-size-8"],
      9: styles["avatar-size-9"],
      10: styles["avatar-size-10"],
      11: styles["avatar-size-11"],
      12: styles["avatar-size-12"],
      13: styles["avatar-size-13"],
    },
    variant: {
      solid: styles["avatar-solid"],
      soft: styles["avatar-soft"],
    },
    disabled: {
      true: styles["avatar-disabled"],
    },
    color: {
      indigo: styles["avatar-color-indigo"],
      orange: styles["avatar-color-orange"],
      mint: styles["avatar-color-mint"],
    },
  },
  compoundVariants: [
    { variant: 'solid', color: 'indigo', className: styles['avatar-solid-indigo'] },
    { variant: 'solid', color: 'orange', className: styles['avatar-solid-orange'] },
    { variant: 'solid', color: 'mint', className: styles['avatar-solid-mint'] },
    { variant: 'soft', color: 'indigo', className: styles['avatar-soft-indigo'] },
    { variant: 'soft', color: 'orange', className: styles['avatar-soft-orange'] },
    { variant: 'soft', color: 'mint', className: styles['avatar-soft-mint'] },
  ],
  defaultVariants: {
    size: 3,
    radius: "small",
    variant: "soft",
    color: "indigo",
  },
});

const image = cva(styles.image);

export interface AvatarProps
  extends ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatar> {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
  src?: string;
  alt?: string;
  fallback?: ReactNode;
  variant?: "solid" | "soft";
  color?: "indigo" | "orange" | "mint";
}

const AvatarRoot = forwardRef<
  ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(
  (
    { className, alt, src, fallback, size, radius, variant, color, style, ...props },
    ref
  ) => (
    <Box className={styles.imageWrapper} style={style}>
      <AvatarPrimitive.Root
        ref={ref}
        className={avatar({ size, radius, variant, color, className })}
        {...props}
      >
        <AvatarPrimitive.Image
          className={image()}
          src={src}
          alt={alt}
        />
        <AvatarPrimitive.Fallback className={styles.fallback}>
          {fallback}
        </AvatarPrimitive.Fallback>
      </AvatarPrimitive.Root>
    </Box>
  )
);

AvatarRoot.displayName = AvatarPrimitive.Root.displayName;

export const Avatar = AvatarRoot;
