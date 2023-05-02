import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon } from "@radix-ui/react-icons";
import React from "react";
import { CSS, styled } from "../../stitches.config";
import { Box } from "../box";
import { Flex } from "../flex";
import { itemCss, labelCss, menuCss, separatorCss } from "../menu";
import { panelStyles } from "../panel";

const StyledContent = styled(DropdownMenuPrimitive.Content, menuCss, panelStyles);

type DropdownMenuContentPrimitiveProps = React.ComponentProps<typeof DropdownMenuPrimitive.Content>;
export type DropdownMenuContentProps = DropdownMenuContentPrimitiveProps & { css?: CSS };

const DropdownMenuContent = React.forwardRef<React.ElementRef<typeof StyledContent>, DropdownMenuContentProps>(
    (props, forwardedRef) => (
        <DropdownMenuPrimitive.Portal>
            <StyledContent {...props} ref={forwardedRef} />
        </DropdownMenuPrimitive.Portal>
    ),
);

const DropdownMenuItem = styled(DropdownMenuPrimitive.Item, itemCss);
const DropdownMenuGroup = styled(DropdownMenuPrimitive.Group, {});
const DropdownMenuLabel = styled(DropdownMenuPrimitive.Label, labelCss);
const DropdownMenuSeparator = styled(DropdownMenuPrimitive.Separator, separatorCss);

const StyledDropdownMenuCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, itemCss);

type DialogMenuCheckboxItemPrimitiveProps = React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>;
type DialogMenuCheckboxItemProps = DialogMenuCheckboxItemPrimitiveProps & { css?: CSS };

const DropdownMenuCheckboxItem = React.forwardRef<
    React.ElementRef<typeof StyledDropdownMenuCheckboxItem>,
    DialogMenuCheckboxItemProps
>(({ children, ...props }, forwardedRef) => (
    <StyledDropdownMenuCheckboxItem {...props} ref={forwardedRef}>
        <Box as="span" css={{ position: "absolute", left: "$1" }}>
            <DropdownMenuPrimitive.ItemIndicator>
                <CheckIcon />
            </DropdownMenuPrimitive.ItemIndicator>
        </Box>
        {children}
    </StyledDropdownMenuCheckboxItem>
));

const DropdownMenuRadioGroup = styled(DropdownMenuPrimitive.RadioGroup, {});
const StyledDropdownMenuRadioItem = styled(DropdownMenuPrimitive.RadioItem, itemCss);

type DialogMenuRadioItemPrimitiveProps = React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>;
type DialogMenuRadioItemProps = DialogMenuRadioItemPrimitiveProps & { css?: CSS };

const DropdownMenuRadioItem = React.forwardRef<
    React.ElementRef<typeof StyledDropdownMenuRadioItem>,
    DialogMenuRadioItemProps
>(({ children, ...props }, forwardedRef) => (
    <StyledDropdownMenuRadioItem {...props} ref={forwardedRef}>
        <Box as="span" css={{ position: "absolute", left: "$1" }}>
            <DropdownMenuPrimitive.ItemIndicator>
                <Flex css={{ width: "$3", height: "$3", alignItems: "center", justifyContent: "center" }}>
                    <Box
                        css={{
                            width: "$1",
                            height: "$1",
                            backgroundColor: "currentColor",
                            borderRadius: "$round",
                        }}
                    />
                </Flex>
            </DropdownMenuPrimitive.ItemIndicator>
        </Box>
        {children}
    </StyledDropdownMenuRadioItem>
));

const DropdownMenuPrimitiveRoot = styled(DropdownMenuPrimitive.Root, {});
export const DropdownMenu = Object.assign(DropdownMenuPrimitiveRoot, {
    Trigger: DropdownMenuPrimitive.Trigger,
    Content: DropdownMenuContent,
    Item: DropdownMenuItem,
    Group: DropdownMenuGroup,
    Label: DropdownMenuLabel,
    Separator: DropdownMenuSeparator,
    CheckboxItem: DropdownMenuCheckboxItem,
    RadioGroup: DropdownMenuRadioGroup,
    RadioItem: DropdownMenuRadioItem,
});
