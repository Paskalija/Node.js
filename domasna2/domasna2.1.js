function birthdayCakeCandles(cakes) {
    
    let max = 0;
    let counter = 0;

    cakes.forEach(currentCandleHeight => {
        if(currentCandleHeight > max) {
            max = currentCandleHeight;
            counter = 1;
        } else if (currentCandleHeight === max) {
            counter ++;
        }
    });
    return counter;
}