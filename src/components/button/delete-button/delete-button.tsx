import { Button } from "primereact/button";
import { FaTrashAlt } from "react-icons/fa";
import { MouseEventHandler } from "react";

type ButtonDeleteProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  tooltip?: string;
  className?: string;
  disabled?: boolean;
};

export function ButtonDeleteComponent({
  onClick,
  tooltip = "Hapus",
  className = "text-red-600 hover:text-red-500 p-2 cursor-pointer w-fit",
  disabled = false,
}: ButtonDeleteProps) {
  return (
    <Button
      className={className}
      outlined
      rounded
      tooltip={tooltip}
      tooltipOptions={{
        position: "bottom",
        className: "text-[12px]",
      }}
      disabled={disabled}
      onClick={onClick}
    >
      <FaTrashAlt />
    </Button>
  );
}
