function countApplesAndOranges(s,t,a,b,apples,oranges){
    //count
    let count = [0,0]
    //loop apples
    apples.forEach(apple => {
        //check for positive values only
        if(apple <1) return
        //check distance from house a+m
        let distance = apple + a;
        //distance in range count-a ++
        if(distance >= s && distance <= t) count[0] += 1
    })

    //loop oranges
    oranges.forEach(orange => {
        //check for negative values only
        if(orange > -1) return
        //check distance from house b+n
        let distance = orange + b;
        //distance in range count-b ++
        if(distance >= s && distance <= t) count[1] += 1
        })

    //count.forEach(count console.log(count))
    count.forEach(count >= console.log(count))
}