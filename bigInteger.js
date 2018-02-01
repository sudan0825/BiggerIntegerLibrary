;(function (global){

    var plusMinus=function(num1,num2){

        this.a=num1.split('');
        this.b=num2.split('');
   
        this.k = compare(a,b);
        a=a.reverse();
        b=b.reverse();
        return new plusMinus.init(a,b,k);

    }
    plusMinus.init=function(a,b,k){
        let self =this;
        self.a=a||"";
        self.b=b||"";
        self.k=k||0;
        return self;


    }
    plusMinus.prototype={


        plus:function(){
          

            let result=[]
            let i = 0, j=0, count=0;
            while(a[i]&&b[j]){
                a[i]=Number(a[i]);
                b[j]=Number(b[j]);
                if(a[i]+b[j]+count>=10){
                    result[i]=a[i]+b[j]+count-10;
                    count=1;
                }else{
                    result[i]=a[i]+b[j]+count;
                    count=0;
                }
                i++;
                j++;

            }
            while(a[i]){
                a[i]=Number(a[i]);
                if(count){
                    if(a[i]+count>=10){
                        result[i]=a[i]+count-10;
                        count=1;
                        i++;
                    }else{
                        result[i]=a[i]+count;
                        count=0;
                    }
                }else{
                    return a; 
                }

            } 
            while(b[j]){
                a[i]=Number(a[i]);
                b[j]=Number(b[j]);
                if(count){
                    if(b[j]+count>=10){
                        result[i]=b[j]+count-10;
                        count=1;

                    }else{
                        result[i]=b[j]+count;
                        count=0;
                    }

                }else{
                    result[i]=b[j]; 
                }
                i++;
                j++;
            }
            if(count){
                result[i]=1;
                count=0;
            }

            return result.reverse().join('');

        },

        minus:function(){

            let borrow=0,neg=false,len=0,result=[];


            if(k>0){

                len=a.length;
                return minustwonumber(a,b);

            }else if(k<0){
                len=b.length;
                return "-"+minustwonumber(b,a);
            }
            else {
                return 0
            }

        }
    }
    plusMinus.init.prototype=plusMinus.prototype;
    global.plusMinus=global.$pm=plusMinus;


    //compare two number string, if the first string is bigger return 1, if the second string is bigger return -1, else return 0
    function compare(a,b){
        if(a.length>b.length) return 1;
        if(a.length<b.length) return -1;

        for(let i = 0; i< a.length;i++){
            a[i]=Number(a[i]);
            b[i]=Number(b[i]);
            if(a[i]>b[i]){
                return 1;
            }else if(a[i]<b[i]){
                return -1;
            }
        }
        return 0;
    }

    //deduct the small number from big number 
    function minustwonumber(a,b){

        if(a<=b) return 'a is equal or less than b';
        let len = a.length, borrow=0, result=[];
        let i=0;
        for(;i<len;i++){
            if(borrow){
                a[i]=a[i]-1;
                borrow=0;
            }
            if(b[i]){
                if(a[i]<b[i]){
                    borrow=1;
                    result[i]=borrow*10+a[i]-b[i];
                   
                }else{

                    result[i]=a[i]-b[i];
                }
            }
            else{

                result[i]=a[i];
              
            }


        }
       
       
        while(result[i]==0&&i>=1){
            result=result.splice(0,i);
            i--;
            
        }
      
        
      console.log(result);
        return result.reverse().join('');
    }
})(window)
