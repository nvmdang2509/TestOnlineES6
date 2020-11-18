class MultipleChoice extends Question{
    constructor(id,type,content,answers){
        super(id,type,content,answers); // khi kế thừa phải sử dụng super() và khai báo các biến giống biến cha
    }
    checkExact(){

    }
    // return đoạn mã HTML tương ứng với câu hỏi MultipleChoice
    render(){
        var answersHTML = '';

        for(var i = 0 ; i < this.answers.length ; i ++){
            answersHTML += `
                <div>
                    <input type="radio" />
                    <label>${this.answers[i].content}</label>
                </div>
            `
        }
        return `
        <div>
            <h1>Câu hỏi 1: ${this.content}</h1>
            ${answersHTML}
        </div>
        `
    }
}


const newMultipleChoice = new MultipleChoice("1","1","Hom nay la thu may?",[
    {content: "Thu 2"},
    {content: "Thu 3"},
    {content: "Thu 5"},
    {content: "Thu 7"},
]);

console.log(newMultipleChoice);

console.log(newMultipleChoice.render());