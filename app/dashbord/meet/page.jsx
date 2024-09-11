'use client';
import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import SimplePeer from 'simple-peer';
import { MicIcon, VideoIcon, PhoneIcon, MessageSquareIcon, UsersIcon, MoreVerticalIcon } from "lucide-react"

const Page = () => {
  const [socket, setSocket] = useState(null);
  const [peer, setPeer] = useState(null);
  const myVideo = useRef();
  const userVideo = useRef();

  useEffect(() => {
    const socket = io('http://localhost:3000');  // Spécifiez l'URL du serveur Socket.IO
    setSocket(socket);

    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        myVideo.current.srcObject = stream;

        const peer = new SimplePeer({ initiator: true, stream });
        setPeer(peer);

        peer.on('signal', (data) => {
          socket.emit('offer', data);
        });

        socket.on('offer', (data) => {
          peer.signal(data);
        });

        peer.on('stream', (stream) => {
          userVideo.current.srcObject = stream;
        });
      }).catch(error => {
        console.error('Erreur d\'accès aux médias :', error);
      });

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  return (
    
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
      {/* Main content area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Main video */}
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-gray-200">
          <video ref={myVideo} autoPlay muted
              
                className="w-full h-full rounded-lg"
              />
          </div>
          <div className="absolute top-4 left-4 bg-transparent bg-opacity-50 text-white px-2 py-1 rounded">
            John Doe
          </div>
        </div>
        
        {/* Sidebar with participant thumbnails */}
        <div className="w-64 bg-gray-200 dark:bg-gray-800 p-4 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Participants</h2>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="mb-4 relative">
               <video ref={userVideo} autoPlay muted
              
                className="w-full rounded-lg"
              /> 
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-1 py-0.5 rounded">
                User {i}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Control bar */}
      <div className="h-20 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between px-6">
        <div className="flex space-x-4">
          <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors">
            <MicIcon className="h-5 w-5 text-gray-700 dark:text-gray-200" />
          </button>
          <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors">
            <VideoIcon className="h-5 w-5 text-gray-700 dark:text-gray-200" />
          </button>
        </div>
        <div className="flex space-x-4">
          <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors">
            <MessageSquareIcon className="h-5 w-5 text-gray-700 dark:text-gray-200" />
          </button>
          <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors">
            <UsersIcon className="h-5 w-5 text-gray-700 dark:text-gray-200" />
          </button>
          <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors">
            <MoreVerticalIcon className="h-5 w-5 text-gray-700 dark:text-gray-200" />
          </button>
        </div>
        <button className="p-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors">
          <PhoneIcon className="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  
  );
};

export default Page;
