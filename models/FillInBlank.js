class FillinBlank extends Question{
    constructor(id,type,content,answers){
        super(id,type,content,answers); // khi kế thừa phải sử dụng super() và khai báo các biến giống biến cha
    }

    checkExact(){

    }

    render(){
        return `
        <div>
            <h1>Câu hỏi 1: ${this.content}</h1>
            <input type="text"/>
        </div>
        `
    }
}
const newFillinBlank = new FillinBlank("1","2","Hom nay la thu may","");

console.log(newFillinBlank);
console.log(newFillinBlank.render());