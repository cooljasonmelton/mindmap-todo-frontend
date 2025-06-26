import { ChevronRight } from "lucide-react";

export const OpenButton = ({
  color,
  onClick,
}: {
  color?: string;
  onClick: () => void;
}) => {
  return (
    <button className="btn-primary-sm" onClick={onClick}>
      <ChevronRight size={24} color={color} strokeWidth={2} />
    </button>
  );
};
