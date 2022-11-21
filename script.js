var quotes = [
  '\"Have no fear of perfection -- you\ll never reach it.\" -Salvador Dali',
  '\"Everything is designed. Few things are designed well.\" -Brian Reed',
  '\"You can\t use up creativity. The more you use, the more you have.\" -Maya Angelou',
  '\"Design adds value faster than it adds costs.\" -Joel Spolsky',
  '\"Design is not just what it looks like and feels like. Design is how it works.\" -Steve Jobs',
]



function genQuote(){
  var randomNum = Math.floor(Math.random()*quotes.length);
  document.getElementById('genQuote').innerHTML = quotes[randomNum];
}
