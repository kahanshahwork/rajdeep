import { useEffect, useState } from 'react';
import { getCurrentOffer, type Offer } from '../lib/supabase';

export default function OfferPopup() {
  const [offer, setOffer] = useState<Offer | null>(null);
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Load the current offer once.
  useEffect(() => {
    let alive = true;
    getCurrentOffer().then((o) => {
      if (!alive) return;
      if (o && o.active && (o.image_url || o.text)) setOffer(o);
    });
    return () => {
      alive = false;
    };
  }, []);

  // Show when the hero is in view. If the user dismisses, don't reshow until
  // they leave the hero and scroll back up into it again.
  useEffect(() => {
    if (!offer) return;
    const hero = document.getElementById('top');
    if (!hero) return;

    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e.isIntersecting) {
          if (!dismissed) setOpen(true);
        } else {
          // left the hero → reset so scrolling back up shows it again
          setDismissed(false);
          setOpen(false);
        }
      },
      { threshold: 0.5 }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, [offer, dismissed]);

  const close = () => {
    setOpen(false);
    setDismissed(true);
  };

  if (!offer || !open) return null;

  return (
    <div className="offer" role="dialog" aria-modal="true" aria-label="Special offer" onClick={close}>
      <div className="offer__card" onClick={(e) => e.stopPropagation()}>
        <button className="offer__close" onClick={close} aria-label="Close offer">×</button>
        {offer.image_url && (
          <div className="offer__imgwrap">
            <img className="offer__img" src={offer.image_url} alt={offer.text || 'Special offer'} />
          </div>
        )}
        {offer.text && (
          <div className="offer__body">
            <p className="eyebrow" style={{ marginBottom: '0.6rem' }}>Special Offer</p>
            <p className="offer__text">{offer.text}</p>
          </div>
        )}
      </div>
    </div>
  );
}
