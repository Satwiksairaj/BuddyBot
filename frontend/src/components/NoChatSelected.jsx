// import { MessageSquare } from "lucide-react";

// const NoChatSelected = () => {
//   return (
//     <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
//       <div className="max-w-md text-center space-y-6">
//         {/* Icon Display */}
//         <div className="flex justify-center gap-4 mb-4">
//           <div className="relative">
//             <div
//               className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center
//              justify-center animate-bounce"
//             >
//               <MessageSquare className="w-8 h-8 text-primary " />
//             </div>
//           </div>
//         </div>

//         {/* Welcome Text */}
//         <h2 className="text-2xl font-bold">Welcome to Talklet!</h2>
//         <p className="text-base-content/60">
//           Select a conversation from the sidebar to start chatting
//         </p>
//       </div>
//     </div>
//   );
// };

// export default NoChatSelected;

import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div
      className="flex flex-1 flex-col items-center justify-center p-12 bg-base-100/50 min-h-[60vh]"
      role="region"
      aria-label="No chat selected message"
    >
      <div className="max-w-sm text-center space-y-6">
        {/* Icon Container */}
        <div className="flex justify-center mb-6">
          <div
            className="w-20 h-20 rounded-3xl bg-primary/20 flex items-center justify-center
                       shadow-lg hover:shadow-xl transition-shadow duration-300
                       animate-bounce-slow"
            aria-hidden="true"
          >
            <MessageSquare className="w-10 h-10 text-primary" />
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-3xl font-extrabold text-primary">Welcome to Talklet!</h2>
        <p className="text-base text-base-content/70 max-w-xs mx-auto">
          Select a conversation from the sidebar to start chatting with your friends.
          Enjoy seamless communication at your fingertips.
        </p>
      </div>

      {/* Extra subtle footer note */}
      <p className="mt-12 text-sm text-base-content/40 italic select-none">
        Tip: You can start a new chat by clicking the "+" button above.
      </p>

      {/* Custom bounce animation */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12%);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default NoChatSelected;

