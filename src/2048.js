M=(c,d)=>{
    for(i=H=16;i--;G|=p>>11)
        for(p=B[m=V(j=i%4+1)];
            --j
                ?(q=B[n=V(j)])
                    ?p-q
                        ?0
                        :h=c
                            ?0
                            :B[
                                p
                                    ?S+=B[m]*=2
                                    :B[i++,m]=q,
                                n
                            ]=d
                    :1
                :0;)
            R=Math.random
},

V=x=>{
    if(x)
        return(D>1?4-x:x-1)<<D%2*2|i-i%4>>D%2*2;
    for(i=H|R()*H;B[--i%H];);
    B[i%H]=2<<R()+.1
},

(onkeyup=e=>{
    D=e?e.which-37:B=[];
    D>>2||M()|V(e?h:V());
    for(D=h=4;D--;)M(1);
    for(h=S+'<table border>';H;P.innerHTML=h+='<th width=50 height=50>'+[B[H]])
        H--%4?0:h+='<tr>'
})(S=G=0)
