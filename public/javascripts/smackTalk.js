let wins = ['gg ez', 
            'BOOM!', 
            'I\'m just looking around to see who’s gonna finish second.',
            'Fatso there just forgot to shake my hand, I guess.',
            'I\'m not arrogant, I\'m good.',
            'It ain\'t braggin\' if you can back it up.']

let losses = ['Don\'t touch me, I\'ll beat your brains out.',
              'You want fireworks? I\'ll give you friggin\' fireworks!',
              'I\'m keeping track of these cheap shots for later.',
              'That\'s it. It\'s not your birthday anymore',
              'Full on LUCK!',
              'I\'m learning your tricks',
              'Be afraid. Be very afraid.']
document.querySelectorAll('p[data-behavior=smackTalk-win]')[0].innerHTML = wins[Math.floor((Math.random() * wins.length))]
document.querySelectorAll('p[data-behavior=smackTalk-lose]')[0].innerHTML = losses[Math.floor((Math.random() * losses.length))]