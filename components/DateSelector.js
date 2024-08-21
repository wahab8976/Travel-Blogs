import React from "react";
import { DatePicker } from "@nextui-org/react";
import { parseDate, getLocalTimeZone } from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";

export default function DateSelector({ value, onChange }) {
  let formatter = useDateFormatter({ dateStyle: "full" });

  return (
    <div className="w-full flex flex-col gap-y-2">
      <DatePicker
        className="max-w-[284px]"
        value={value}
        onChange={onChange}
        aria-label="Select date"
      />
      <p className="text-default-500 text-sm">
        Selected date:{" "}
        {value ? formatter.format(value.toDate(getLocalTimeZone())) : "--"}
      </p>
    </div>
  );
}
