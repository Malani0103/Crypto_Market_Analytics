def generate_signal(
    current_price,
    moving_average
):

    if current_price > moving_average:
        return "BUY"

    elif current_price < moving_average:
        return "SELL"

    return "HOLD"