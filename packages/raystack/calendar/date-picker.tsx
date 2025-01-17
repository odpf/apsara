import { Popover } from "~/popover";
import { TextField } from "~/textfield";
import { Calendar } from "./calendar";
import styles from "./calendar.module.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import dayjs from "dayjs";
import { TextfieldProps } from "~/textfield/textfield";
import { PropsBase, PropsSingleRequired } from "react-day-picker";

import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);


interface DatePickerProps {
  side?: "top" | "right" | "bottom" | "left";
  dateFormat?: string;
  textFieldProps?: TextfieldProps;
  calendarProps?: PropsSingleRequired & PropsBase;
  onSelect?: (date: Date) => void;
  placeholder?: string;
  value?: Date;
}

export function DatePicker({
  side = "top",
  dateFormat = "DD/MM/YYYY",
  placeholder = "DD/MM/YYYY",
  textFieldProps,
  calendarProps,
  value = new Date(),
  onSelect = () => {},
}: DatePickerProps) {
  const defaultDate = dayjs(value).format(dateFormat);

  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarVal, setCalendarVal] = useState(value);
  const [inputState, setInputState] = useState<Partial<React.ComponentProps<typeof TextField>['state']>>();

  const isDropdownOpenRef = useRef(false);
  const textFieldRef = useRef<HTMLInputElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const isInputFieldFocused = useRef(false);
	const calendarValRef = useRef(value);

	useEffect(() => {
		calendarValRef.current = calendarVal;
	}, [calendarVal]);

  function isElementOutside(el: HTMLElement) {
    return !isDropdownOpenRef.current && // Month and Year dropdown from Date picker
           !textFieldRef.current?.contains(el) && // TextField
           !contentRef.current?.contains(el);
  }

  const handleMouseDown = useCallback((event: MouseEvent) => {
      const el = (event.target) as HTMLElement | null;
      if (el && isElementOutside(el)) removeEventListeners();
  }, [])

  function registerEventListeners() {
    isInputFieldFocused.current = true;
    document.addEventListener('mouseup', handleMouseDown);
  }

  function removeEventListeners() {
    isInputFieldFocused.current = false;
    setShowCalendar(false);

    const updatedVal = dayjs(calendarValRef.current).format(dateFormat);

    if  (textFieldRef.current) textFieldRef.current.value = updatedVal;
    if (inputState === undefined) onSelect(dayjs(updatedVal).toDate());

    document.removeEventListener('mouseup', handleMouseDown);
  }

  const handleSelect = (day: Date) => {
    onSelect(day);
    setCalendarVal(day);
		calendarValRef.current = day;
    setInputState(undefined);
    removeEventListeners();
  };

  function onDropdownOpen() {
    isDropdownOpenRef.current = true;
  }

  function onOpenChange(open?: boolean) {
    if (!isDropdownOpenRef.current && !(isInputFieldFocused.current && showCalendar)) {
      setShowCalendar(Boolean(open));
    }

    isDropdownOpenRef.current = false;
  }

  function handleInputFocus() {
    if (isInputFieldFocused.current) return;
    if (!showCalendar) setShowCalendar(true);
  }

  function handleInputBlur(event: React.FocusEvent) {
    if (isInputFieldFocused.current) {
        const el = event.relatedTarget as HTMLElement | null;
        if (el && isElementOutside(el)) removeEventListeners();
    } else {
        registerEventListeners();
        setTimeout(() => textFieldRef.current?.select());
    }
  }

  function handleKeyUp(event: React.KeyboardEvent) {
    if (event.code === 'Enter' && textFieldRef.current) {
        textFieldRef.current.blur();
        removeEventListeners();
    }
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    const format = value.includes("/") ? "DD/MM/YYYY" : value.includes("-") ? "DD-MM-YYYY" : undefined;
    const date = dayjs(value.replace(/(\d{1,2})\/(\d{1,2})\/(\d{4})/, (_, day, month, year) => {
				return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`; // Replaces [8/8/2024] to [08/08/2024]
		}), format);

    const isValidDate = date.isValid();

    const isAfter = calendarProps?.startMonth !== undefined ? dayjs(date).isSameOrAfter(calendarProps.startMonth) : true;
    const isBefore = calendarProps?.endMonth !== undefined ? dayjs(date).isSameOrBefore(calendarProps.endMonth) : true;

    const isValid = isValidDate && isAfter && isBefore && dayjs(date).isSameOrBefore(dayjs());

    if (isValid) {
        setCalendarVal(date.toDate());
        if (inputState === 'invalid') setInputState(undefined);
    } else {
        setInputState('invalid');
    }
  }

  return (
    <Popover open={showCalendar} onOpenChange={onOpenChange}>
      <TextField
          ref={textFieldRef}
          defaultValue={defaultDate}
          trailing={<Popover.Trigger asChild><CalendarIcon /></Popover.Trigger>}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          state={inputState}
          placeholder={placeholder}
          onKeyUp={handleKeyUp}
          {...textFieldProps}
      />

      <Popover.Content side={side} className={styles.calendarPopover} ref={contentRef}>
        <Calendar
          required={true}
          {...calendarProps}
          onDropdownOpen={onDropdownOpen}
          mode="single"
          selected={calendarVal}
          month={calendarVal}
          onSelect={handleSelect}
          onMonthChange={setCalendarVal}
        />
      </Popover.Content>
    </Popover>
  );
}