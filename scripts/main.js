<script type="text/javascript">
    window.onload = function(){
             setInterval("toggleSound()",100);
        }

    function toggleSound() {
                var music = document.getElementById("vd");//���ID  
                    
                if (music.paused) { //�PŪ�O�_����  
                    music.paused=false;
                    music.play(); //�S���N���� 
                }    
        }
</script>