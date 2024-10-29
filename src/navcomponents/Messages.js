// import React from 'react'; 
// import VideoCallIcon from '@mui/icons-material/VideoCall';
// import CallIcon from '@mui/icons-material/Call';
// import SearchIcon from '@mui/icons-material/Search';

// const Messages = () => {
//   return (
//     <div className='main-chat flex flex-row border border-white rounded w-auto mt-8'>
//       <div className='left-chat flex-1 p-2 border-r bg-cyan-950 rounded w-2/5'>

//         <div>
//           <nav className="flex items-center justify-center p-3 flex-1">
//             <div className="flex items-center">
//               <input className="text-black focus:outline-none focus:shadow-outline border border-gray-400 rounded py-1 px-4 block leading-normal w-71" type="text" placeholder=" Search" />
//             </div>
//             <div>
//               <i className="far fa-user text-lg cursor-pointer"></i>
//             </div>
//           </nav>
//         </div>

//         <ul>
//           <li class="user flex items-center mb-2 cursor-pointer hover:bg-slate-800 hover:rounded p-2">
//             <img src='https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-2/assets/avatar-2-11d6be6e.png' class="w-12 h-12 rounded-full" alt="User profile"/>
//             <div className='flex flex-col ml-4'>
//               <div className="text-white">Alice</div>
//               <div className="text-slate-500">If it will take long you can mail me ... </div>
//             </div>  
//           </li>

//           <li class="user flex items-center mb-2 cursor-pointer hover:bg-slate-800 hover:rounded p-2">
//             <img src='https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-2/assets/avatar-5-d340221a.png' class="w-12 h-12 rounded-full" alt="User profile"/>
//             <div className='flex flex-col ml-4'>
//               <div className="text-white">Bob</div>
//               <div className="text-slate-500">what's up bro</div>
//             </div>  
//           </li>

//           <li class="user flex items-center mb-2 cursor-pointer hover:bg-slate-800 hover:rounded p-2">
//             <img src='https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-2/assets/avatar-4-b0163f21.png' class="w-12 h-12 rounded-full" alt="User profile"/>
//             <div className='flex flex-col ml-4'>
//               <div className="text-white">Adele Ross</div>
//               <div className="text-slate-500">Just working on my React project.</div>
//             </div>  
//           </li>

//           <li class="user flex items-center mb-2 cursor-pointer hover:bg-slate-800 hover:rounded p-2">
//             <img src='https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-2/assets/avatar-8-e4ad8d8c.png' class="w-12 h-12 rounded-full" alt="User profile"/>
//             <div className='flex flex-col ml-4'>
//               <div className="text-white">Memosa</div>
//               <div className="text-slate-500">send the progress</div>
//             </div>  
//           </li>

//           <li class="user flex items-center mb-2 cursor-pointer hover:bg-slate-800 hover:rounded p-2">
//             <img src='https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-2/assets/avatar-6-c56877f3.png' class="w-12 h-12 rounded-full" alt="User profile"/>
//             <div className='flex flex-col ml-4'>
//               <div className="text-white">Ganes</div>
//               <div className="text-slate-500">I am fine, thanks. And you?</div>
//             </div>  
//           </li>

//           <li class="user flex items-center mb-2 cursor-pointer hover:bg-slate-800 hover:rounded p-2">
//             <img src='https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-2/assets/avatar-3-47317f35.png' class="w-12 h-12 rounded-full" alt="User profile"/>
//             <div className='flex flex-col ml-4'>
//               <div className="text-white">Gavin</div>
//               <div className="text-slate-500">Can we have a meet , wanna discuss something</div>
//             </div>  
//           </li>

//         </ul>
//       </div>

//       <div className='right-chat flex-2 border-white flex-col w-3/5 h-full'>

//         <div className='flex flex-row bg-cyan-950 p-4 rounded border-b'>
          
//           <div class="active-chat-header cursor-pointer flex">
//           <img src='https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-2/assets/avatar-2-11d6be6e.png' class="w-12 h-12 rounded-full" alt="User profile"/>
//             <div className='flex flex-col ml-4'>
//               <div className="text-white">Alice</div>
//               <div className="text-slate-500">UI/UX Designer </div>
//             </div>  
//           </div>
//           <div className="flex items-center ml-auto">
//             <button className="mx-2 text-white">
//               <CallIcon />
//             </button>
//             <button className="mx-2 text-white">
//               <VideoCallIcon />
//             </button>
//             <button className="mx-2 text-white">
//               <SearchIcon />
//             </button>
//           </div>
          
//         </div>

//         <div className='chat-body bg-cyan-900 h-full'>

//           <div className='flex flex-col'>

//             <p>If it will take long you can mail me tomorrow </p>
//             <div className=''>
//               1:15PM
//             </div>
//           </div>

//         </div>

        
//       </div>

//     </div>
//   )
// }

// export default Messages;


import React from 'react'; 
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CallIcon from '@mui/icons-material/Call';
import SearchIcon from '@mui/icons-material/Search';

const Messages = () => {
  return (
    <div className='main-chat flex flex-row border border-white rounded w-auto mt-8 h-[40rem]'>
      <div className='left-chat flex-1 p-2 border-r bg-cyan-950 rounded w-2/5'>

      <div>
        <nav className="flex items-center justify-center p-3 flex-1">
          <div className="flex items-center">
            <input className="text-black focus:outline-none focus:shadow-outline border border-gray-400 rounded py-1 px-4 block leading-normal w-71" type="text" placeholder=" Search" />
          </div>
          <div>
            <i className="far fa-user text-lg cursor-pointer"></i>
          </div>
        </nav>
      </div>

        <ul>
          <li class="user flex items-center mb-2 cursor-pointer hover:bg-slate-800 hover:rounded p-2">
            <img src='https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-2/assets/avatar-2-11d6be6e.png' class="w-12 h-12 rounded-full" alt="User profile"/>
            <div className='flex flex-col ml-4'>
              <div className="text-white">Alice</div>
              <div className="text-slate-500">If it will take long you can mail me ... </div>
            </div>  
          </li>

          <li class="user flex items-center mb-2 cursor-pointer hover:bg-slate-800 hover:rounded p-2">
            <img src='https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-2/assets/avatar-5-d340221a.png' class="w-12 h-12 rounded-full" alt="User profile"/>
            <div className='flex flex-col ml-4'>
              <div className="text-white">Bob</div>
              <div className="text-slate-500">what's up bro</div>
            </div>  
          </li>

          <li class="user flex items-center mb-2 cursor-pointer hover:bg-slate-800 hover:rounded p-2">
            <img src='https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-2/assets/avatar-4-b0163f21.png' class="w-12 h-12 rounded-full" alt="User profile"/>
            <div className='flex flex-col ml-4'>
              <div className="text-white">Adele Ross</div>
              <div className="text-slate-500">Just working on my React project.</div>
            </div>  
          </li>

          <li class="user flex items-center mb-2 cursor-pointer hover:bg-slate-800 hover:rounded p-2">
            <img src='https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-2/assets/avatar-8-e4ad8d8c.png' class="w-12 h-12 rounded-full" alt="User profile"/>
            <div className='flex flex-col ml-4'>
              <div className="text-white">Memosa</div>
              <div className="text-slate-500">send the progress</div>
            </div>  
          </li>

          <li class="user flex items-center mb-2 cursor-pointer hover:bg-slate-800 hover:rounded p-2">
            <img src='https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-2/assets/avatar-6-c56877f3.png' class="w-12 h-12 rounded-full" alt="User profile"/>
            <div className='flex flex-col ml-4'>
              <div className="text-white">Ganes</div>
              <div className="text-slate-500">I am fine, thanks. And you?</div>
            </div>  
          </li>

          <li class="user flex items-center mb-2 cursor-pointer hover:bg-slate-800 hover:rounded p-2">
            <img src='https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-2/assets/avatar-3-47317f35.png' class="w-12 h-12 rounded-full" alt="User profile"/>
            <div className='flex flex-col ml-4'>
              <div className="text-white">Gavin</div>
              <div className="text-slate-500">Can we have a meet , wanna discuss something</div>
            </div>  
          </li>

        </ul>

      </div>

      <div className='right-chat flex-2 border-white flex-col w-3/5 bg-cyan-900 rounded h-full'>

        <div className='flex flex-row bg-cyan-950 p-4 rounded border-b'>
          
          <div className="active-chat-header cursor-pointer flex">
            <img src='https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-2/assets/avatar-2-11d6be6e.png' className="w-12 h-12 rounded-full" alt="User profile"/>
            <div className='flex flex-col ml-4'>
              <div className="text-white">Alice</div>
              <div className="text-slate-500">UI/UX Designer </div>
            </div>  
          </div>
          <div className="flex items-center ml-auto">
            <button className="mx-2 text-white">
              <CallIcon />
            </button>
            <button className="mx-2 text-white">
              <VideoCallIcon />
            </button>
            <button className="mx-2 text-white">
              <SearchIcon />
            </button>
          </div>
          
        </div>

        <div className='chat-body bg-cyan-900 p-4'>

          <div className='single-chat flex flex-row mb-4'>
            <div className='mr-2'>
              <img src='https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-2/assets/avatar-2-11d6be6e.png' class="w-8 h-8 rounded-full" alt="User profile"/>
            </div>
            <div className='flex flex-col'>
              <p class="bg-gray-300 rounded p-2 text-slate-700">Hello. How can I help You? </p>
              <div className="text-slate-400">
                1:15PM
              </div>
            </div>
          </div>
          
          <div className='single-chat flex flex-row-reverse mb-4'>
            <div className='ml-2'>
              <img src='https://i.ibb.co/Cv0RDLS/yellow-bg-profile-photo-2.png' class="w-8 h-8 rounded-full" alt="User profile"/>
            </div>
            <div className='flex flex-col'>
              <p class="bg-gray-300 rounded p-2 text-slate-700">I am looking for a UI/UX Designer for my website  </p>
              <div className="text-slate-400 text-right">
                1:15PM
              </div>
            </div>
          </div>

          <div className='single-chat flex flex-row mb-4'>
            <div className='mr-2'>
              <img src='https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-2/assets/avatar-2-11d6be6e.png' class="w-8 h-8 rounded-full" alt="User profile"/>
            </div>
            <div className='flex flex-col'>
              <p class="bg-gray-300 rounded p-2 text-slate-700">Could you please tell about your requirements </p>
              <div className="text-slate-400">
                1:16PM
              </div>
            </div>
          </div>
          
          <div className='single-chat flex flex-row-reverse mb-4'>
            <div className='ml-2'>
              <img src='https://i.ibb.co/Cv0RDLS/yellow-bg-profile-photo-2.png' class="w-8 h-8 rounded-full" alt="User profile"/>
            </div>
            <div className='flex flex-col'>
              <p class="bg-gray-300 rounded p-2 text-slate-700">I have to figure out somethings </p>
              <div className="text-slate-400 text-right">
                1:17PM
              </div>
            </div>
          </div>

          <div className='single-chat flex flex-row mb-4'>
            <div className='mr-2'>
              <img src='https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-2/assets/avatar-2-11d6be6e.png' class="w-8 h-8 rounded-full" alt="User profile"/>
            </div>
            <div className='flex flex-col'>
              <p class="bg-gray-300 rounded p-2 text-slate-700 mb-2">Okay</p>
              <p class="bg-gray-300 rounded p-2 text-slate-700">If it will take long you can mail me tomorrow  </p>
              <div className="text-slate-400">
                1:19PM
              </div>
            </div>
          </div>

        </div>

        <div>
        <nav className="flex p-3 w-full flex-1">
          <div className="flex w-full">
            <input className="text-black focus:outline-none focus:shadow-outline border border-gray-400 rounded py-2 px-4 block leading-normal w-full" type="text" placeholder="Type your message..." />
          </div>
          
        </nav>
      </div>
        
      </div>

    </div>
  );
};

export default Messages;
