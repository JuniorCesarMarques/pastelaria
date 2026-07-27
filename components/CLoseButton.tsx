type Props = {
  onClose: () => void;
};

export default function CloseButton({ onClose }: Props) {
  return (
    <button  onClick={onClose} className="p-2 bg-red-500 rounded absolute text-white top-0 right-0">
      X
    </button>
  );
}
