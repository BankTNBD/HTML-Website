urllist = {
    //social
    'Facebook': 'https://facebook.com/IamBanky',
    'Instagram': 'https://www.instagram.com/iam.banky',
    'Twitter': 'https://twitter.com/CallMeBanky',
    'Discord': 'https://discord.com/users/784066460627632148',
    'Twitch': 'https://www.twitch.tv/iambanky',
    'Locket': 'https://locket.camera/links/zXjafyizLfQfBzZv5',
    'Github': 'https://github.com/BankTNBD',

    //Project
    'RandomChat': 'http://randomchat.iambanky.com',
    '52WeeksWithThanabadee': 'https://www.instagram.com/52weekswiththanabadee/'
}

const link = (url) => {
  window.open(urllist[url], "_blank");
}