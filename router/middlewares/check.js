let checkLogin = (req,res,next)=>{
	if(!req.session.user){
		req.flash('error','未登录');
		//res.send(req.flash('error'));
		return res.redirect('/')
	}
	next();
}


let checkNotLogin = (req,res,next)=>{
	if(req.session.user){
		req.flash('error','已登录');
		return res.redirect('./signin')
	}
	next();
}
export {checkLogin,checkNotLogin}