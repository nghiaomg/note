
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
            </a>
            
            <script>
            $("#info_button_modal").click(function(){
                console.log("hi")
                loading()
            })

            </script>
            `);
        }
    }
}
listLoader();