import React from 'react';

function Notifications() {

    return (
        <div>

            <div className='bg-cyan-950 text-lg p-2 mb-3 rounded shadow-md shadow-white'>
                Notifications
            </div>
            <div className="container mx-auto p-4 bg-cyan-900 rounded shadow-lg shadow-white">
                <ul>

                    <li class="user flex mb-2 items-center cursor-pointer hover:bg-slate-800 hover:rounded p-2">
                        <img src='https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-2/assets/avatar-2-11d6be6e.png' class="w-12 h-12 rounded-full mr-1" alt="User profile" />
                        
                        <div className="text-white mr-1 font medium">Alice </div>
                        <div className="text-slate-400">commented: Nice to meet u .</div>
                        <div className="text-slate-500 ml-1">40s</div>
                        
                    </li>

                    <li class="user flex items-center mb-2 cursor-pointer hover:bg-slate-800 hover:rounded p-2">
                        <img src='https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-2/assets/avatar-2-11d6be6e.png' class="w-12 h-12 rounded-full mr-1" alt="User profile" />
                        
                        <div className="text-white mr-1 font medium">Alice </div>
                        <div className="text-slate-400">liked your post</div>
                        <div className="text-slate-500 ml-1">40s</div>
                        
                    </li>

                    <li class="user flex items-center mb-2 cursor-pointer hover:bg-slate-800 hover:rounded p-2">
                        <img src='https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-2/assets/avatar-2-11d6be6e.png' class="w-12 h-12 rounded-full mr-1" alt="User profile" />
                        
                        <div className="text-white mr-1 font medium">Alice </div>
                        <div className="text-slate-400">liked your story</div>
                        <div className="text-slate-500 ml-1">40s</div>
                        
                    </li>

                    <li class="user flex items-center mb-2 cursor-pointer hover:bg-slate-800 hover:rounded p-2">
                        <img src='https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-2/assets/avatar-8-e4ad8d8c.png' class="w-12 h-12 rounded-full mr-1" alt="User profile" />
                        
                        <div className="text-white mr-1 font medium">Adele Ross </div>
                        <div className="text-slate-400">liked your post</div>
                        <div className="text-slate-500 ml-1">59s</div>
                        
                    </li>

                    <li class="user flex items-center mb-2 cursor-pointer hover:bg-slate-800 hover:rounded p-2">
                        <img src='https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-2/assets/avatar-4-b0163f21.png' class="w-12 h-12 rounded-full mr-1" alt="User profile" />
                        
                        <div className="text-white mr-1 font medium">Memosa </div>
                        <div className="text-slate-400">liked your story .</div>
                        <div className="text-slate-500 ml-1">2hr</div>
                        
                    </li>

                    <li class="user flex items-center mb-2 cursor-pointer hover:bg-slate-800 hover:rounded p-2">
                        <img src='https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-2/assets/avatar-5-d340221a.png' class="w-12 h-12 rounded-full mr-1" alt="User profile" />
                        
                        <div className="text-white mr-1 font medium">John </div>
                        <div className="text-slate-400">commented: Hi! Ayush .</div>
                        <div className="text-slate-500 ml-1">1d</div>
                        
                    </li>

                    
                </ul>
            </div>

        </div>
    );
}

export default Notifications;
