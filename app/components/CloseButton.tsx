import { X } from "lucide-react";

export const CloseButton = ({
  iconColor,
  onClick,
}: {
  iconColor?: string;
  onClick: () => void;
}) => {
  return (
    <button className="btn-primary-icon-sm" onClick={onClick}>
      <X size={24} color={iconColor} strokeWidth={2} />
    </button>
  );
};
