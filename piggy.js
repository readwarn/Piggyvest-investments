var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      hideInterest:true,
      showInterest:false,
      hideTarget:true,
      showTarget:false,
      hideFeedback:true,
      showFeedback:false,
      hideMain:false,
      dropdownHide:true,
      todayDate:"",
      frequency:"",
      error:"",
      target:"",
      pickedDate:"",
      savings:0,
      targetOutput:0,
      cashOutDate:"",
      cod:""
    },
    
    methods:{
      //show interest sidebar
      showInterestf(){
         this.hideInterest=false;
         this.showInterest=true;
         this.hideMain=true;
      },
      //hide interest sidebar
      hideInterestf(){
         this.hideInterest=true;
         this.showInterest=false;
         this.hideMain=false;
      },
      //show interest sidebar
      showTargetf(){
         this.hideTarget=false;
         this.showTarget=true;
         this.hideMain=true;
      },
      //hide interest sidebar
      hideTargetf(){
         this.hideTarget=true;
         this.showTarget=false;
         this.hideMain=false;
     },
     
     //hide feedback
     hideFeedbackf(){
       this.hideFeedback=true;
       this.showFeedback=false;
       this.hideMain=false;
     },

     //show feedback
     showFeedbackf(){
         this.showFeedback=true;
         this.hideFeedback=false;
         this.hideTarget=true;
         this.showTarget=false;
     },

     //update selected frequency
     daily(){
       this.frequency='Daily';
       this.dropdownHide=true;
     },
     monthly(){
       this.frequency='Monthly';
       this.dropdownHide=true;
     },

     //format date
      formatDate(date){
      var day = date.getDate();
      var month = date.getMonth() + 1; 
      var year = date.getFullYear();
      if(day<10){
        day="0"+day;
      }
      if(month<10){
        month="0"+month
      }
      var dateAlt=year + "-" + month + "-" + day;
      return dateAlt;  
      },
       //calculate user target
       calculateTarget(){
       
        if(this.target===""){
          this.error="Mr Man input a valid amount";
        }
        else if(this.frequency===""){
             this.error="Chief, choose a saving frequency"
        }
        else{
              this.error="";
              this.cashOutDate=new Date(this.pickedDate);
              this.cod=this.formatDate(this.cashOutDate);
              var currentDate=new Date();
              var dateDifference=this.cashOutDate - currentDate;
              var res = Math.abs(dateDifference) / 1000;
              var elapsedDays = (Math.floor(res / 86400))+1;
              var elapsedMonths=Math.round(elapsedDays/28);
              var target1=parseInt(this.target);
              var dailyAmount=(target1/elapsedDays).toFixed(2);
              var monthlyAmount=(target1/elapsedMonths).toFixed(2);
             if(this.frequency==="Monthly"){
                if(elapsedMonths<1){
                     this.error="Period should be over a month"
                     
                }else{
                  this.savings=monthlyAmount;
                  this.showFeedbackf();
                  alert(this.hideMain)
                }
              }

              else{
               this.savings=dailyAmount;
               this.showFeedbackf();
              }
            

        }
      }
    },
    created(){
      var currentDate=new Date();
      this.pickedDate=this.formatDate(currentDate);
      this.todayDate=this.formatDate(currentDate);
    }
  });