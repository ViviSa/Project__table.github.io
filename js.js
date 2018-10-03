window.onload = function() {

    var addRow = document.querySelector('#ar'),
        addColumn = document.querySelector('#ac'),
        deleteRow = document.querySelector('#dr'),
        deleteColumn = document.querySelector('#dc'),
        table = document.querySelector('#table tbody'),
        trArr = document.querySelectorAll('#table tr');
        


    addRow.addEventListener('click', function(){
         var tr =  document.createElement('tr');
        tdArr = document.querySelectorAll('#table tr:last-child td');
        
        for (var i=0; i<tdArr.length; i++) { 
            tr.appendChild(document.createElement('td'));
        }

        table.appendChild(tr);

        if(trArr.length >= 1){
            deleteRow.style.display = 'block';
            //table.addEventListener('mouseover', toBlock);
        }
    }); 
    
    addColumn.addEventListener('click', function(){
        trArr = document.querySelectorAll('#table tr');

        for (var i=0; i<trArr.length; i++) { 
           trArr[i].appendChild(document.createElement('td'));
        }  
        if(trArr.length >= 1){
            deleteColumn.style.display = 'block';
        }
    });

    deleteRow.addEventListener('click', function(){
        trArr = document.querySelectorAll('#table tr');

        if(trArr.length <= 2){
            deleteRow.style.display = 'none';
        }
        
        table.deleteRow(0);

    });

    deleteColumn.addEventListener('click', function(){
        trArr = document.querySelectorAll('#table tr');
        tdArr = document.querySelectorAll('#table tr td');
    
        for (var i=0; i<trArr.length; i++) { 
            lchild = trArr[i].lastChild;
            lchild = lchild.previousSibling;

            fchild = trArr[i].firstChild;

            trArr[i].removeChild(lchild);

            if( fchild == lchild){
                deleteColumn.style.display = 'none';
            }   
        }
    });

    function toBlock() {
        deleteRow.style.visibility = 'visible';
        deleteColumn.style.visibility = 'visible';
        tdArr = document.querySelectorAll('#table tr td');
        
        for(item of tdArr){ 
            item.onmouseover = function() {
                var event = $(this).offset()
                $('#dc').offset({left:event.left});
                $('#dr').offset({top: event.top});
            }
        }
    }

    $('.table-full').hover(function(){
        deleteRow.style.visibility = 'hidden';
        deleteColumn.style.visibility = 'hidden';
       
    });
    table.addEventListener('mouseover', toBlock);
    
}