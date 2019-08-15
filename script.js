function showTweet(i) {
  let tweetsPointer = document.querySelector("#tweets");

  let tweetDiv = document.createElement("div");
  tweetDiv.setAttribute("class", "tweet")

  let usernameSpan = document.createElement("span");
  let usernameTextnode = document.createTextNode(DATA[i].user);
  usernameSpan.appendChild(usernameTextnode);
  usernameSpan.setAttribute("class", "username");
  usernameSpan.setAttribute("onclick", "showTimeline(this.textContent)");
  tweetDiv.appendChild(usernameSpan);

  let timestampSpan = document.createElement("span");
  let timestampTextnode = document.createTextNode(DATA[i].created_at);
  timestampSpan.appendChild(timestampTextnode);
  timestampSpan.setAttribute("class", "timestamp");
  tweetDiv.appendChild(timestampSpan);

  let messageDiv = document.createElement("div");
  let messageTextnode = document.createTextNode(DATA[i].message);
  messageDiv.appendChild(messageTextnode);
  messageDiv.setAttribute("class", "message");
  tweetDiv.appendChild(messageDiv);

  tweetsPointer.insertBefore(tweetDiv, tweetsPointer.childNodes[2]);    
}

function showInitialTweets() {

  for(let i = 0; i < DATA.length; i++) {
    showTweet(i)
  }
}
showInitialTweets();

function createRandomTweet() {
  let randomTweet = generateNewTweet();
  DATA.push(randomTweet);
  showTweet(DATA.indexOf(randomTweet));


}

/**pseudo code
 * 
 * 작성자 이름 클릭하면 타임라인을 볼 수 있게 만들기
 * 
 * -클릭한 user와 일치하는 div만 display 할 수 있어야 함
 *  -for loop 돌면서 클릭한 username의 textNode와 일치하지 않으면 parent에게 display none
 *   
 * 
 */

function buttonSwitcher() {
  let btsInBtArea = document.querySelectorAll("#buttonArea button");

  for(let i = 0; i < btsInBtArea.length; i++) {
    if(btsInBtArea[i].style.display === "none") {
      btsInBtArea[i].style.display = "inline";
    } else {
      btsInBtArea[i].style.display = "none";
    }
  }
}

function showTimeline(thisTextContent) {
  buttonSwitcher();
  let usernames = document.querySelectorAll(".username");
  for(let i = 0; i < usernames.length; i++) {
    if(thisTextContent !== usernames[i].textContent) {
      usernames[i].parentElement.style.display = "none";
    }
  }
}

function clearFilter() {
  buttonSwitcher();
  let allTweets = document.querySelectorAll(".tweet");
  for(let i = 0; i < allTweets.length; i++) {
    if(allTweets[i].style.display === "none") {
      allTweets[i].removeAttribute("style");
    }
  }
}

function createTypedNewTweet() {
  let tweet = {};
  let typedUsername = document.querySelector("#inputUsername input").textContent;
  let typedMessage = document.querySelector("#inputMessage input").textContent;

  tweet.user = typedUsername;
  tweet.message = typedMessage;
  tweet.created_at = new Date().format();

  DATA.push(tweet);
  showTweet(DATA.indexOf(tweet));
}






// DATA는 이미 작성된 트윗을 표시합니다.
console.log(DATA)

// generateNewTweet을 호출할 때마다 새로운 트윗을 생성합니다.
console.log(generateNewTweet());

// document.getElementById('tweets').innerHTML = 'hello twittler, check developer console!';