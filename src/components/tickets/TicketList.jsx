import { useState } from 'react';
import TicketCard from './TicketCard';
import TicketPurchaseModal from './TicketPurchaseModal';

export default function TicketList({ tickets, eventId }) {
  const [selectedTicket, setSelectedTicket] = useState(null);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Available Tickets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            onSelect={setSelectedTicket}
          />
        ))}
      </div>
      
      {selectedTicket && (
        <TicketPurchaseModal
          ticket={selectedTicket}
          eventId={eventId}
          onClose={() => setSelectedTicket(null)}
        />
      )}
    </div>
  );
}