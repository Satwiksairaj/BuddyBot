// const AuthImagePattern = ({ title, subtitle }) => {
//   return (
//     <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
//       <div className="max-w-md text-center">
//         <div className="grid grid-cols-3 gap-3 mb-8">
//           {[...Array(9)].map((_, i) => (
//             <div
//               key={i}
//               className={`aspect-square rounded-2xl bg-primary/10 ${
//                 i % 2 === 0 ? "animate-pulse" : ""
//               }`}
//             />
//           ))}
//         </div>
//         <h2 className="text-2xl font-bold mb-4">{title}</h2>
//         <p className="text-base-content/60">{subtitle}</p>
//       </div>
//     </div>
//   );
// };

// export default AuthImagePattern;

const AuthImagePattern = ({ title, subtitle }) => {
  const colors = ["bg-primary/10", "bg-secondary/10", "bg-accent/10", "bg-neutral/10"];

  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12 min-h-screen">
      <div className="max-w-md text-center">
        {/* Animated Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-xl shadow-md ${
                colors[i % colors.length]
              } ${i % 2 === 0 ? "animate-pulse" : "opacity-70"}`}
            />
          ))}
        </div>

        {/* Title */}
        <h2 className="text-3xl font-extrabold text-gray-800 mb-3 tracking-tight">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-base text-gray-600 leading-relaxed">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
