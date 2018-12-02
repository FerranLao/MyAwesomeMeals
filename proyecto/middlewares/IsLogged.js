
const isLoggedIn = redirectTo => (req,res,next) => {
  console.log(req.user)
  if(req.user){
    if(req.user.active) return next();
    req.flash('error','YOU HAVE NO ACCESS!');
    req.session.returnTo = req.url;
    res.redirect(redirectTo);
  }
  req.flash('error','YOU HAVE NO ACCESS!');
  req.session.returnTo = req.url;
  res.redirect(redirectTo);
  }
  
  const isLoggedOut = redirectTo => (req,res,next) => {
    if(!req.user) return next();
    req.flash('error','YOU ARE LOGGED IN ALREADY!');
    delete req.session.returnTo;
    res.redirect(redirectTo);
  }
  
  module.exports = {
    isLoggedIn,
    isLoggedOut
  }