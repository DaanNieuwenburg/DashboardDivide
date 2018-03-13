export class TestModel{
	private _id:int;
	private _title:string;
	private _description:string;
	get id(): int{
		return this._id;
	}
	set id(id: int){
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
	constructor(){
	}
}