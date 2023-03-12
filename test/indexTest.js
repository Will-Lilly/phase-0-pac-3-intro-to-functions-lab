require ( './root.js' );

function shout(string) {
  return string.toUpperCase()
}

'Hello!'.toUpperCase() // 'HELLO!'

describe('shout(string)', function() {
  it('receives one argument and returns it in all caps', function() {
    expect(shout('hello')).toEqual('HELLO');
  })
})

function whisper(string) {
  return string.toLowerCase()
}

'HELLO!'.toLowerCase() // 'Hello!'


describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello');
  })
})


function logShout(string) {
  console.log()
}

function logShout (aWord) {
  console.log(aWord.toUpperCase( ));
}

describe('logShout(string)', function() {
  it('takes a string argument and logs it in all caps using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logShout('hello');

    expect(spy).toHaveBeenCalledWith('HELLO');

    console.log.restore();
  })
})



function logWhisper (aWord) {
  console.log(aWord.toLowerCase( ));
}

describe('logWhisper(string)', function() {
  it('takes a string argument and logs it in all lowercase using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logWhisper('HELLO');

    expect(spy).toHaveBeenCalledWith('hello');

    console.log.restore();
  })
})

describe('sayHiToHeadphonedRoommate(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToHeadphonedRoommate('hello')).toEqual("I can't hear you!");
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToHeadphonedRoommate('HELLO')).toEqual("YES INDEED!");
  })

  it('returns "I would love to!" if `string` is "Let\'s have dinner together!"`', function () {
    expect(sayHiToHeadphonedRoommate("Let's have dinner together!")).toEqual(
      "I would love to!"
    );
  });
})

function sayHiToHeadphonedRoommate(string){
  if (string.toLowerCase() === string){
    return 'I can\'t hear you!';
  }
  if (string.toUpperCase() === string){
    return 'YES INDEED!';
  }
  if (string === 'I love you, Grandma.'){
    return 'I love you, too.';
  }

    if (string === 'Let\'s have dinner together!'){
      return 'I would love to!';
    }
  }
