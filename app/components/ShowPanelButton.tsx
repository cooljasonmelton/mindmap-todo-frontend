import { ChevronLeft, ChevronRight } from "lucide-react";

export const ShowPanelButton = ({
  isOpen = false,
  color,
  onClick,
}: {
  isOpen?: boolean;
  color?: string;
  onClick: () => void;
}) => {
  return (
    <button className="btn-primary-icon-sm" onClick={onClick}>
      {isOpen ? (
        <ChevronRight size={24} color={color} strokeWidth={2} />
      ) : (
        <ChevronLeft size={24} color={color} strokeWidth={2} />
      )}
    </button>
  );
};
