import React, { useState } from 'react';
import Classnames from 'classnames';
import { PrizeoutOffer, PrizeoutOfferSettings } from '../../../../../slices/offers-slice';
import { OfferGiftCard } from '../offer-gift-card/offer-gift-card';

import './vertical-offers.less';

interface OfferView {
    offers: PrizeoutOffer[];
    viewSettings?: PrizeoutOfferSettings;
}

const VerticalOffers: React.FC<OfferView> = ({ offers, viewSettings }): React.ReactElement => {
    const [selected, setSelected] = useState<string>('');
    const heading = viewSettings.title || 'Recommended';
    const subtitle = viewSettings.subtitle || null;
    const classes: string = Classnames('vertical-offers', { '--has-subtitle': subtitle });

    // TODO: update offerClickHandler
    const offerClickHandler = (offer: PrizeoutOffer) => {
        setSelected(offer.name);
    };

    const returnOffers = () => {
        return offers.map((offer) => (
            <OfferGiftCard
                key={`${heading}-${offer.name}`}
                offer={offer}
                onClickHandler={() => offerClickHandler(offer)}
                selected={selected}
            />
        ));
    };

    return (
        <div className={classes}>
            <h2>{heading}</h2>
            {subtitle && <h3>{subtitle}</h3>}
            {offers && <div className="vertical-offers__gift-cards">{returnOffers()}</div>}
        </div>
    );
};

export default VerticalOffers;
