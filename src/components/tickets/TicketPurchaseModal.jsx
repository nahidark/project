import { useState } from 'react';
import { X } from 'lucide-react';
import TicketQuantitySelector from './TicketQuantitySelector';

export default function TicketPurchaseModal({ ticket, eventId, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const total = quantity * ticket.price;

  const handlePurchase = async () => {
    try {
      // Handle purchase logic here
      console.log('Purchase:', { ticketId: ticket.id, eventId, quantity });
      onClose();
    } catch (error) {
      console.error('Purchase failed:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="glass-card w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <X className="h-5 w-5" />
        </button>

        <h3 className="text-xl font-bold mb-4">Purchase Tickets</h3>
        
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-300">{ticket.type}</span>
            <span className="font-semibold">${ticket.price}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-300">Quantity</span>
            <TicketQuantitySelector
              quantity={quantity}
              onChange={setQuantity}
              max={ticket.available}
            />
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-xl font-bold gradient-text">
                ${total.toFixed(2)}
              </span>
            </div>

            <button
              onClick={handlePurchase}
              className="w-full btn-primary py-3"
            >
              Purchase Tickets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}