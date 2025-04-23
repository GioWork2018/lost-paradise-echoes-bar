
import React from 'react';
import { ParallaxElement } from '../ui/ParallaxElement';
import { EvocativeCTA } from '../ui/EvocativeCTA';

interface DetailProps {
  number: number;
  text: string;
}

const Detail: React.FC<DetailProps> = ({ number, text }) => (
  <div className="flex items-start gap-2">
    <div className="w-6 h-6 rounded-full bg-toxic/20 flex items-center justify-center mt-0.5">
      <span className="text-xs">{number}</span>
    </div>
    <p className="text-sm text-fog/80">{text}</p>
  </div>
);

interface CollectionItemProps {
  title: string;
  description: string;
  image: string;
  price: string | React.ReactNode;
  details: string[];
  imagePosition?: 'left' | 'right';
  className?: string;
}

export const CollectionItem: React.FC<CollectionItemProps> = ({
  title,
  description,
  image,
  price,
  details,
  imagePosition = 'left',
  className = ''
}) => {
  const baseOrder = imagePosition === 'right' ? 'order-2 md:order-1' : '';
  const imageOrder = imagePosition === 'right' ? 'order-1 md:order-2' : '';

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${className}`}>
      {imagePosition === 'left' && (
        <ParallaxElement>
          <div className="aspect-square max-w-md mx-auto rusty-border">
            <img 
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </ParallaxElement>
      )}
      
      <div className={baseOrder}>
        <h2 className="text-2xl md:text-3xl font-display mb-4">{title}</h2>
        <p className="text-fog/80 mb-6">{description}</p>
        
        <div className="space-y-4 mb-8">
          {details.map((detail, index) => (
            <Detail key={index} number={index + 1} text={detail} />
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <div className="font-mono text-xl text-toxic">{price}</div>
          <EvocativeCTA 
            text="Contatta l'artista" 
            to="https://giovannimotta.it/contacts"
            external={true}
          />
        </div>
      </div>
      
      {imagePosition === 'right' && (
        <ParallaxElement className={imageOrder}>
          <div className="aspect-square max-w-md mx-auto rusty-border">
            <img 
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </ParallaxElement>
      )}
    </div>
  );
};
