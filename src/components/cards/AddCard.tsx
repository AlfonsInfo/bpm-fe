import { Card } from "primereact/card";
import { Plus } from "lucide-react"; // opsional, jika pakai ikon

interface AddCardProps {
  text?: string;
  onClick?: () => void;
}

export function AddCard({ text = "Add new item", onClick }: AddCardProps) {
  return (
    <Card
      onClick={onClick}
      className="w-full flex items-center justify-center border-dashed border-2 border-blue-400 hover:border-blue-500 hover:bg-blue-50 transition-colors cursor-pointer"
    >
      <div className="text-center text-gray-600 flex flex-col items-center gap-2">
        <Plus className="w-6 h-6 text-blue-500" />
        <p className="font-medium">{text}</p>
      </div>
    </Card>
  );
}
