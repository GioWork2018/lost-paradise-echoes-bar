
import { Check } from 'lucide-react';

interface BookingInterestsProps {
  interest: string[];
  onInterestChange: (item: string) => void;
}

export const BookingInterests = ({ interest, onInterestChange }: BookingInterestsProps) => {
  const interests = [
    {
      id: 'sagome',
      label: '15 Sagome Originali in Legno (€12.000 cad.)'
    },
    {
      id: 'stampe',
      label: '15 Stampe Artistiche (€3.000 cad.)'
    },
    {
      id: 'tela',
      label: '"Lost Paradise" - Dipinto su Tela (Prezzo su richiesta)'
    },
    {
      id: 'toy',
      label: 'Toy "Fresh Start Day" (€340)'
    }
  ];

  return (
    <div>
      <label className="block text-sm font-mono text-fog/80 mb-2">
        OPERE DI INTERESSE
      </label>
      <div className="space-y-2">
        {interests.map(({ id, label }) => (
          <div key={id} className="flex items-center">
            <input
              type="checkbox"
              id={id}
              checked={interest.includes(id)}
              onChange={() => onInterestChange(id)}
              className="w-4 h-4 bg-transparent border border-fog/30 rounded-sm focus:outline-none focus:border-toxic mr-3"
            />
            <label htmlFor={id} className="text-sm text-fog/90">
              {label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
