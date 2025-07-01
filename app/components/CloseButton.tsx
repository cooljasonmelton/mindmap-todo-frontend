import { X } from "lucide-react";

export const CloseButton = ({
  color,
  onClick,
}: {
  color?: string;
  onClick: () => void;
}) => {
  return (
    <button className="btn-primary-icon-sm" onClick={onClick}>
      <X size={24} color={color} strokeWidth={2} />
    </button>
  );
};
