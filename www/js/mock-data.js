var items = [];
var prefix = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var status = [
	"PLANNING", //未开始
	"DOING",  //正在进行
	"PEDING",   //卡住
	"DONE",    //结束
	"OVERDUE" //逾期
]

for(var i = 0; i< 11; i++){
  var index = Math.floor(Math.random()*5);
  var item = {
    id:i,
    status:status[index],
    name: prefix[i] + '_name' + (i + 1),
    commits:[],
    start_date:"2012-12-12",
    plan_time: "2013-02-12",
    tracks:[
      {
        status:'PLANNING',
        create_date:"2012-12-12",
        owner:'jacobdong',
        message:"This template loads"
      },
      {
        status:'DOING',
        create_date:"2012-12-13",
        owner:'jacobdong',
        message:"S1"
      },
      {
        status:'DOING',
        create_date:"2012-12-14",
        owner:'jacobdong',
        message:"S2"
      },
      {
        status:'DOING',
        create_date:"2012-12-15",
        owner:'jacobdong',
        message:"S3"
      },
      {
        status:'DOING',
        create_date:"2012-12-16",
        owner:'jacobdong',
        message:"S4"
      },
      {
        status:'DOING',
        create_date:"2012-12-17",
        owner:'jacobdong',
        message:"S5"
      },
      {
        status:'DONE',
        create_date:"2012-12-18",
        owner:'jacobdong',
        message:"This template loads for the 'tab.friend-detail' state (app.js)'friend' is a $scope variable created in the FriendsCtrl controller (controllers.js)"
      }
    ]
  }
 // console.log('add');
  items.push(item);
}



angular.module('starter.constants', [])
	.constant('MOCK_DATA',items);
