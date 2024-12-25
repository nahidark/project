import { Ticket, Users, Clock } from 'lucide-react';

export default function TicketCard({ ticket, onSelect }) {
  return (
    <div className="glass-card p-6 cursor-pointer" onClick={() => onSelect(ticket)}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Ticket className="h-6 w-6 text-indigo-500" />
          <h3 className="text-lg font-semibold">{ticket.type}</h3>
        </div>
        <span className="text-xl font-bold gradient-text">${ticket.price}</span>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <Users className="h-4 w-4 mr-2" />
          <span>{ticket.available} available</span>
        </div>
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <Clock className="h-4 w-4 mr-2" />
          <span>Valid until {new Date(ticket.validUntil).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}