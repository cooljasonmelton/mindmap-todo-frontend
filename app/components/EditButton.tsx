import { Pencil } from "lucide-react";

export const EditButton = ({
  iconColor,
  onClick,
}: {
  iconColor?: string;
  onClick: () => void;
}) => {
  return (
    <button className="btn-primary-icon-sm" onClick={onClick}>
      <Pencil size={24} color={iconColor} strokeWidth={2} />
    </button>
  );
};
