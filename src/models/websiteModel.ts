export class websiteModel{
	id:Number;
	name:String;
	link:String;
	loginurl:String;
	
	constructor(id:Number, name:String, link:String, loginurl:String){
		this.name = name;
		this.id = id;
		this.loginurl = loginurl;
		this.link = link;
	}	
}