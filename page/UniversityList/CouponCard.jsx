import React from 'react'
import { CouponCardText, CouponCardView, CouponCardTextView, CouponBuyButton, CouponBuyText } from '../../style/universityStyled/couponCardStyled'

function CouponCard({ props }) {
    return (
        <CouponCardView>
            <CouponCardTextView>
                <CouponCardText>{props.place}</CouponCardText>
                <CouponCardText>{props.menu}</CouponCardText>
                <CouponCardText>{props.discount}% 할인</CouponCardText>
            </CouponCardTextView>
            <CouponBuyButton>
                <CouponBuyText>구매하기</CouponBuyText>
            </CouponBuyButton>
        </CouponCardView>
    )
}

export default CouponCard