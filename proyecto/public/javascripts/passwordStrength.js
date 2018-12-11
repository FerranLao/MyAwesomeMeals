console.log('entra')
$('#password').password({
    shortPass: 'The password is too short',
    badPass: 'Weak; try combining letters & numbers',
    goodPass: 'Medium; try using special charecters',
    strongPass: 'Strong password',
    containsUsername: 'The password contains the username',
    enterPass: 'Type your password',
    showPercent: false,
    showText: true, 
    animate: true,
    animateSpeed: 'fast', 
    username: false,
    usernamePartialMatch: true,
    minimumLength: 4 
  });