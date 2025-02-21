const Rectangle = require('./classWorkRectangle')

test('get the Rectanguler object name',()=>{
    let object =  new Rectangle('brickWall',34,44) 
    result = object.getName()
    answer = 'brickWall'
    expect(result).toEqual(answer)
})

test('get the Rectanguler object area',()=>{
    let object =  new Rectangle('brickWall',34,44) 
    result = object.getArea()
    answer = 34*44
    expect(result).toEqual(answer)
})

test('check if the Rectanguler has object ',()=>{
    let object =  new Rectangle('brickWall',34,44) 
    result = object.isSquare()
    answer = false
    expect(result).toEqual(answer)
})

