export class TestModel{
	constructor(id:any, title:string, description:string){
		this.id = id;
		this.title = title;
		this.description = description;
	}
	private _id:any;
	private _title:string;
	private _description:string;
	get id(): any{
		return this._id;
	}
	set id(id: any){
		this._id = id;
	}
	get title(): string{
		return this._title;
	}
	set title(title: string){
		this._title = title;
	}
	
	get description(): string{
		return this._description;
	}
	set description(description: string){
		this._description = description;
	}

}
