import { ChevronLeft } from "lucide-react";

export const OpenButton = ({
  color,
  onClick,
}: {
  color?: string;
  onClick: () => void;
}) => {
  return (
    <button className="btn-primary-icon-sm" onClick={onClick}>
      <ChevronLeft size={24} color={color} strokeWidth={2} />
    </button>
  );
};
