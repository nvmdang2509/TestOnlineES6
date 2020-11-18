// Ex: Testing Online (trắc nghiệm trực tuyến)
// Task : 1.Call API lấy ds câu hỏi 
// 2. Render câu hỏi ra màn hình
// 3.Tính điểm và show kết quả 

// declaration function
// function a(){}

// expression function
// var a = function(){}


var fetchQuestion = function(){
    axios({
        url : "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions",
        method: "GET",
    }).then(function(res){
        console.log(res);
        var questionList = mapData(res.data);
        console.log(questionList);
        renderQuestion(questionList);
    }).catch(function(err){
        console.log(err);
    });

    // promise-trangthai => pending, result(fulfill) , erorr(reject)
    //promise-thuoctinh => then-thanhcong , catch-thatbai 
};

var renderQuestion = function(questionList){
    var questionHTML = '';
    for(var i = 0 ; i <questionList.length ;i ++)
    {
        questionHTML += questionList[i].render()
    }
    document.querySelector('#questionTable').innerHTML = questionHTML;
}


// nhan vao ds cau hoi tu backend => chuyen thanh ds cau hoi cua minh
var mapData = function (dataFromDB){
    var mappedData = []; // mang sau khu map
    for(var i = 0 ; i < dataFromDB.length ; i ++)
    {
        var currentQuestion = dataFromDB[i];
        // kiem tra loai cau hoi de dung lop doi tuong tuong ung 
        if(currentQuestion.questionType === 1){
            mappedData.push(
            new MultipleChoice(currentQuestion.id,currentQuestion.questionType,currentQuestion.content,currentQuestion.answers));
        }else{
            mappedData.push(
            new FillinBlank(currentQuestion.id,currentQuestion.questionType,currentQuestion.content,currentQuestion.answers));
        }
    }
    return mappedData;

};

fetchQuestion();