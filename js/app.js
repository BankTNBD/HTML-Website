urllist = {
    //social
    'Facebook': 'https://facebook.com/IamBanky',
    'Instagram': 'https://instagram.com/iam.banky',
    'Twitter': 'https://twitter.com/CallMeBanky',
    'Discord': 'https://discord.com/users/784066460627632148',
    'Twitch': 'https://www.twitch.tv/iambanky',
    'Github': 'https://github.com/BankTNBD',
    'RandomChat': 'http://randomchat.iambanky.com'
}

const link = (url) => {
  window.location.href = urllist[url]
}