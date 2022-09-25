
function listLoader(){
    $("#note").html("");
    for (let i = 0; i <= window.localStorage.getItem('countNote'); i++) {
        if(window.localStorage.getItem(i) !== null){
            var itemId = window.localStorage.getItem(i);
            var data = JSON.parse(window.localStorage.getItem(i));
                $("#note").append(`
                <a id="my_note" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="text-right font-bold tracking-tight text-gray-900 dark:text-white">
                    <span>
                        <input id="inline-checkbox" type="checkbox" value="${i}" class="hidden w-5 h-5 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500">
                    </span>
                    <button type="button" data-toggle="modal" id="info_button_modal" data-target="#exampleModalScrollable" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                    </button>
                </h5>
                <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                ${data["title"]}
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                ${data["content"]}
                </p>
                <p class="text-right text-xs">${data["date"]}</p>
            </a>
            
            <script>
            $("#info_button_modal").click(function(){
                console.log("hi")
                loading()
            })

            function LoopHidden(divId){
                if($(divId).hasClass("hidden")){
                    var nodeList = document.querySelectorAll(divId);
                    for (let i = 0; i < nodeList.length; i++) {
                        nodeList[i].classList.remove("hidden")
                    }
                }else{
                    var nodeList = document.querySelectorAll(divId);
                    for (let i = 0; i < nodeList.length; i++) {
                        nodeList[i].classList.add("hidden")
                    }
                }
            }
            </script>
            `);
        }
    }
}
listLoader();




        $("#additon-show").click(function(){
            $("#my-additon").slideToggle(500);
        })
        $("#additon-hidden").click(function(){
            $("#my-additon").slideToggle(500);
        })
        $("#save-note").click(function(){
            addStorage($("#title").val(), $("#content").val());
        })
        $("#close-toast-success").click(function(){
            $("#toast-success").addClass("hidden")
        })
        function toggleToast(divId){
            $("#"+divId).removeClass("hidden");
            setTimeout(function(){
            $("#"+divId).addClass("hidden");
            }, 3000)
        }
        /**
         * Khởi tạo Storage
        */
        if (window.localStorage.getItem('countNote') == null) {
            window.localStorage.setItem('countNote', 0);
        }


        function addStorage(title, cnt){
            var countNote = window.localStorage.getItem('countNote');
            var date = new Date();
            var time = date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
            if(window.localStorage.getItem(new Number(countNote) + 1) == null){
                if (typeof title === 'string' || title instanceof String){
                    if (typeof cnt === 'string' || cnt instanceof String){
                    var data = `{"title": "${title}", "content": "${cnt}", "date": "${time}"}`;
                    window.localStorage.setItem(new Number(countNote) + 1, data);
                    window.localStorage.setItem('countNote', new Number(countNote) + 1);
                    listLoader();
                    toggleToast("toast-success")
                }
                }
            }
        }
        function removeNote(){
            for (let i = 0; i <= window.localStorage.getItem('countNote'); i++) {
                if($("input[value='"+i+"']").prop("checked")){
                    window.localStorage.removeItem(i);
                    listLoader();
                    $("#trash-box-accept").addClass("hidden")
                }
            }
        }

    function loading(){
        $("#info_modal_body").html(`
            <div role="status" class="text-center">
                <svg class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
            `)
    }


    function myloop(){
        LoopHidden("#inline-checkbox")
        LoopHidden("#info_button_modal")
        LoopHidden("#trash-box-accept")
    }
            function LoopHidden(divId){
                if($(divId).hasClass("hidden")){
                    var nodeList = document.querySelectorAll(divId);
                    for (let i = 0; i < nodeList.length; i++) {
                        nodeList[i].classList.remove("hidden")
                    }
                }else{
                    var nodeList = document.querySelectorAll(divId);
                    for (let i = 0; i < nodeList.length; i++) {
                        nodeList[i].classList.add("hidden")
                    }
                }
            }