urllist = {
    //social
    'Facebook': 'https://facebook.com/IamBanky',
    'Instagram': 'https://instagram.com/iam.banky',
    'Twitter': 'https://twitter.com/CallMeBanky',
    'Snapchat': 'https://snapchat.com/add/myname.sbanky',
    'Github': 'https://github.com/BankTNBD'
}

const link = (url) => {
  /*
    swal(`Redirect to ${url}?`, {
        buttons: {
          no: "Exit",
          yes: {
              text: "Redirect",
              value: "yes"
          }
        },
      })
      .then((value) => {
        switch (value) {
          case "yes":
            window.location.href = urllist[url]
            break
        }
    })
  */
  window.location.href = urllist[url]
}