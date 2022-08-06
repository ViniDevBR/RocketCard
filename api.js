const url = 'https://api.github.com/users/'
const search = document.querySelector('#searchUser')

function getUser(){
  fetch(`${url}${search.value}`)
  .then(result => result.json())
  .then(data => {
    userPhoto.src = data.avatar_url
    userName.textContent = data.login
      userFollowers.textContent =`${data.followers} Followers`
      userFollowing.textContent = `${data.following} Following`
      userRepo.textContent =  `${data.public_repos} Repositories`
      userCompany.textContent = data.company
      userLocation.textContent = data.location
    })
    .catch(error => console.error(error))
}


