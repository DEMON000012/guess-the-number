let rand = frandomnumber();
let score = 20;
let highscore = 0;
function fmessage(msg) {
  document.querySelector('.message').textContent = msg;
}
function fnumber(msg) {
  document.querySelector('.number').textContent = msg;
}
function fscore(msg) {
  document.querySelector('.score').textContent = msg;
}
function fhighscore(msg) {
  document.querySelector('.highscore').textContent = msg;
}
function fbody(msg) {
  document.querySelector('body').style.backgroundColor = msg;
}
function frandomnumber() {
  let randomnum = Math.trunc(Math.random() * 20) + 1;
  return randomnum;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //empty
  if (!guess) {
    fmessage('You not guess any value');
  }
  //correct
  else if (guess == rand) {
    fmessage('🎉 Congratulation you got it...');
    fnumber(rand);
    fbody('#60b347');
    if (score > highscore) {
      highscore = score;
      fhighscore(highscore);
    }
  } else if (guess !== rand) {
    fmessage(
      guess > rand ? '🛑 Wrong guess\n too high' : '🛑 Wrong guess\n too low'
    );
    document.querySelector('.guess').value = '';

    if (score > 1) {
      score--;
      fscore(score);
    } else {
      fmessage('💥 you lost the game');
    }
  }
});
//again button'
document.querySelector('.again').addEventListener('click', function () {
  fbody('#222');
  fnumber('?');
  fmessage('Start guessing...');
  document.querySelector('.guess').value = '';
  rand = frandomnumber();
  score = 20;
  fscore(score);
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const guess = Number(document.querySelector('.guess').value);
    //empty
    if (!guess) {
      fmessage('You not guess any value');
    }
    //correct
    else if (guess == rand) {
      fmessage('🎉 Congratulation you got it...');
      fnumber(rand);
      fbody('#60b347');
      if (score > highscore) {
        highscore = score;
        fhighscore(highscore);
      }
    } else if (guess !== rand) {
      fmessage(
        guess > rand ? '🛑 Wrong guess\n too high' : '🛑 Wrong guess\n too low'
      );
      document.querySelector('.guess').value = '';
      if (score > 1) {
        score--;
        fscore(score);
      } else {
        fmessage('💥 you lost the game');
        document.querySelector('.guess').value = '';
      }
    }
  }
});
