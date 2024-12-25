import { Minus, Plus } from 'lucide-react';

export default function TicketQuantitySelector({ quantity, onChange, max }) {
  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => quantity > 1 && onChange(quantity - 1)}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50"
        disabled={quantity <= 1}
      >
        <Minus className="h-4 w-4" />
      </button>
      
      <span className="text-lg font-semibold w-8 text-center">{quantity}</span>
      
      <button
        onClick={() => quantity < max && onChange(quantity + 1)}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50"
        disabled={quantity >= max}
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}