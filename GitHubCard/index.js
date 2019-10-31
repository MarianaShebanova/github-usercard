/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/
function cards(obj) {
  //new
  const card = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo = document.createElement('div');
  const h3 = document.createElement('h3');
  const pUserName = document.createElement('p');
  const pLocation = document.createElement('p');
  const pProfile = document.createElement('p');
  const a = document.createElement('a');
  const pFollowers = document.createElement('p');
  const pFollowing = document.createElement('p');
  const pBio = document.createElement('p');
  
  //class
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  h3.classList.add('name');
  pUserName.classList.add('username');

  //content
  img.src = obj.data.avatar_url;
  h3.textContent = obj.data.name;
  pUserName.textContent = obj.data.name;
  pLocation.textContent = 'Location: ' + obj.data.location;
  pProfile.textContent = 'Profile:';
  a.href = obj.data.html_url;
  a.textContent = obj.data.html_url;
  pFollowers.textContent = 'Followers: ' + obj.data.followers;
  pFollowing.textContent = 'Following: ' + obj.data.following;
  pBio.textContent = 'Bio: ' + obj.data.bio;

  //Setup structure
  
  pProfile.appendChild(a);
  cardInfo.appendChild(h3);
  cardInfo.appendChild(pUserName);
  cardInfo.appendChild(pLocation);
  cardInfo.appendChild(pProfile);
  cardInfo.appendChild(pFollowers);
  cardInfo.appendChild(pFollowing);
  cardInfo.appendChild(pBio);
  card.appendChild(img);
  card.appendChild(cardInfo);

  console.log(card);
  return card;
}
const parent = document.querySelector('.cards');

axios.get('https://api.github.com/users/MarianaShebanova')
  .then(response => {
    //Step 2
    //console.log(response);
    //Step 4
    parent.appendChild(cards(response));

  })
  .catch(err => {
    console.log(err);
  });

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tetondan',
                        'dustinmyers',
                         'justsml',
                          'luishrd',
                          'bigknell'];

followersArray.forEach(item => {
  axios.get('https://api.github.com/users/' + item)
    .then(response => {
      //Step 2
      //console.log(response);
      //Step 4
      parent.appendChild(cards(response));

    })
    .catch(err => {
      console.log(err);
    });
});

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
