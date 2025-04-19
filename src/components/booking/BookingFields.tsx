
interface BookingFieldsProps {
  name: string;
  email: string;
  message: string;
  onNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onMessageChange: (value: string) => void;
}

export const BookingFields = ({
  name,
  email,
  message,
  onNameChange,
  onEmailChange,
  onMessageChange
}: BookingFieldsProps) => {
  return (
    <>
      <div>
        <label htmlFor="name" className="block text-sm font-mono text-fog/80 mb-2">
          NOME COMPLETO
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          className="w-full px-4 py-2 bg-night border border-fog/30 rounded-sm text-white focus:outline-none focus:border-toxic"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-mono text-fog/80 mb-2">
          EMAIL
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          className="w-full px-4 py-2 bg-night border border-fog/30 rounded-sm text-white focus:outline-none focus:border-toxic"
          required
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-mono text-fog/80 mb-2">
          MESSAGGIO (OPZIONALE)
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => onMessageChange(e.target.value)}
          rows={4}
          className="w-full px-4 py-2 bg-night border border-fog/30 rounded-sm text-white focus:outline-none focus:border-toxic"
        />
      </div>
    </>
  );
};
