const url = 'https://api.github.com/users/'
const search = document.querySelector('#searchUser')

function getUser(){
  fetch(`${url}${search.value}`)
  .then(result => result.json())
  .then(data => {
    userPhoto.src = data.avatar_url
    userName.textContent = data.login
      userFollowers.textContent =`${data.followers} 
                                  ${data.followers === 1 ? 'Follower' : 'Followers'}`

      userFollowing.textContent = `${data.following} Following`

      userRepo.textContent =  `${data.public_repos} 
                               ${data.public_repos === 1 ? 'Repositorie' : 'Repositories'}`

      userCompany.textContent = `${data.company === null ? 'Unknown' : data.company}`

      userLocation.textContent = `${data.location === null ? 'Unknown' : data.location}`
    })
    .catch(error => console.error(error))
}
console.log('Open to work now!')