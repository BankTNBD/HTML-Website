urllist = {
    //social
    'Facebook': 'https://facebook.com/IamBanky',
    'Instagram': 'https://instagram.com/iam.banky',
    'Twitter': 'https://twitter.com/CallMeBanky',
    'Snapchat': 'https://snapchat.com/add/myname.sbanky',
    'Github': 'https://github.com/BankTNBD'
}

const link = (url) => {
  window.location.href = urllist[url]
}