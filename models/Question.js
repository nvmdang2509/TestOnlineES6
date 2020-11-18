class Question {
    constructor(id,type,content,answers){
        this.id = id;
        this.questionType = type;
        this.content = content;
        this.answers = answers;
    }

    checkExact(){

    }

    render(){

    }
}

const newQuestion = new Question("1","1","Hom nay la thu may?",[
    {content: "Thu 2"},
    {content: "Thu 3"},
    {content: "Thu 5"},
    {content: "Thu 7"},
]);

console.log(newQuestion);

// protype 
// var Question = function(id,type,content,answers){
//     this.id = id;
//     this.questionType = type;
//     this.content = content;
//     this.answers = answers;
//     this.CheckExact = function(){

//     }

//     this.render = function(){

//     }
// }