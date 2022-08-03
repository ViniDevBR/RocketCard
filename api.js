const url = 'https://api.github.com/users/vinidevbr'

function getUser(){
  fetch(url)
    .then(result => result.json())
    .then(data => {
      userPhoto.src = data.avatar_url
      userName.textContent = data.login
      userFollowers.textContent = data.followers
      userFollowing.textContent = data.following
      userRepo.textContent = data.public_repos
      userCompany.textContent = data.company
      userLocation.textContent = data.location
    })
    .catch(error => console.error(error))
}
getUser()