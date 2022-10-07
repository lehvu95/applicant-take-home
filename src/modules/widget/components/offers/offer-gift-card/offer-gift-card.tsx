import React from 'react';
import Classnames from 'classnames';
import { GiftCard, BonusTag } from '../../../../../components/common/';
import { PrizeoutOffer } from '../../../../../slices/offers-slice';

import './offer-gift-card.less';

interface OfferGiftCardProps {
    selected: PrizeoutOffer;
    offer: PrizeoutOffer;
    onClickHandler: (arg0: PrizeoutOffer) => void;
}

export const OfferGiftCard: React.FC<OfferGiftCardProps> = ({
    selected,
    offer,
    onClickHandler,
}): React.ReactElement => {
    let activeOfferId;

    const firstGiftCard = offer.giftcard_list[0];
    const offerType = firstGiftCard.display_monetary_bonus ? 'monetary' : 'percentage';
    const offerValue = firstGiftCard.display_bonus;
    const classes: string = Classnames('offer-gift-card', {
        'selected-gift-card': offer === selected,
        'selected-offer-gift-card': activeOfferId === firstGiftCard.checkout_value_id,
    });

    return (
        <div className={classes} onClick={() => onClickHandler(offer)}>
            <GiftCard name={offer.name} imgUrl={offer.image_url} altText={offer.name} className="offer" />
            {offerValue > 0 && <BonusTag type={offerType} value={offerValue} size="small" />}
        </div>
    );
};
