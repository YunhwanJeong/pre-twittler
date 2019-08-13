// your code here

// function createButton() {
//     var btn = document.createElement("BUTTON");
//     var t = document.createTextNode("Click Me!");
//     btn.appendChild(t);
//     document.body.appendChild(btn);
// }
// createButton();

/**psedo code
 *  -tweets 하드코딩
 *  -DATA loop 돌면서 tweet 하나씩 생성하는 로직 & tweets에 appendchild하는 로직
 */




function createTweet(DATA) {
  let tweetsPointer = document.querySelector("#tweets");

  for(let tweet of DATA) {
    let tweetDiv = document.createElement("div");
    tweetDiv.setAttribute("class", "tweet")

    let usernameSpan = document.createElement("span");
    let usernameTextnode = document.createTextNode(tweet.user);
    usernameSpan.appendChild(usernameTextnode);
    usernameSpan.setAttribute("class", "username");
    tweetDiv.appendChild(usernameSpan);

    let timestampSpan = document.createElement("span");
    let timestampTextnode = document.createTextNode(tweet.created_at);
    timestampSpan.appendChild(timestampTextnode);
    timestampSpan.setAttribute("class", "timestamp");
    tweetDiv.appendChild(timestampSpan);

    let messageDiv = document.createElement("div");
    let messageTextnode = document.createTextNode(tweet.message);
    messageDiv.appendChild(messageTextnode);
    messageDiv.setAttribute("class", "message");
    tweetDiv.appendChild(messageDiv);

    tweetsPointer.appendChild(tweetDiv);    
  }
}

createTweet(DATA);

// DATA는 이미 작성된 트윗을 표시합니다.
console.log(DATA)

// generateNewTweet을 호출할 때마다 새로운 트윗을 생성합니다.
console.log(generateNewTweet());

// document.getElementById('tweets').innerHTML = 'hello twittler, check developer console!';