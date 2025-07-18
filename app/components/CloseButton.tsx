import { X } from "lucide-react";

export const CloseButton = ({
  isReadyToDelete = false,
  iconColor,
  onClick,
  onBlur,
}: {
  isReadyToDelete?: boolean;
  iconColor?: string;
  onClick: () => void;
  onBlur?: () => void;
}) => {
  return (
    <button
      className={
        isReadyToDelete ? "btn-primary-icon-sm-delete" : "btn-primary-icon-sm"
      }
      onBlur={onBlur}
      onClick={onClick}
    >
      <X size={24} color={iconColor} strokeWidth={2} />
    </button>
  );
};
