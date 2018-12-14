function Login(){
		var done=0;
		var usuario=document.login-inputs.usuario.value;
		usuario=usuario.toLowerCase();
		var senha=document.login-inputs.senha.value;
		seha=senha.toLowerCase();
		if (usuario=="admin" && senha=="admin") {
			window.location="/p/admin.html"; done=1;
		}
		if (done==0) { alert("Dados incorretos, tente novamente"); }
	}
