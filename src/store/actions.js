
export const PROMO_CODE = 'PROMO_CODE'

export const handleChange = e => dispatch => {
    dispatch({
        type:PROMO_CODE,
        payload:e.target.value
    })
}