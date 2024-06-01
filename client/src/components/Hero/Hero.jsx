// import React from 'react';
// import heroimage from '../assets/heroimage.png';

// const Hero = () => {
//   return (
//     <div className="flex justify-center items-center h-screen bg-green-200">
//       <div className="w-1/2 flex flex-col items-center justify-center">
//         <div className="text-center text-7xl text-black font-bold" style={{ fontFamily: 'Times New Roman' }}>
//           Flexable Waste <br /> Management
//         </div>
//         <p className="mt-4 text-center text-black font-medium">
//           Access government waste management services digitally: streamline waste collection, recycling, and disposal for a cleaner, greener community, all at your fingertips.
//         </p>
//         <p className='font-bold'>For getting access </p>
        
//         <button className='bg-green-800  text-white h-10 w-20'>Sign up</button>
//       </div>
//       <div className="w-1/2">
//         <img src={heroimage} alt="hero" />
//       </div>
//     </div>
//   );
// };

// export default Hero;
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import heroimage from '../assets/heroimage.png';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen bg-green-200">
      <div className="md:w-1/2 flex flex-col items-center justify-center px-4">
        <div className="text-center text-4xl md:text-7xl text-black font-bold mb-4" style={{ fontFamily: 'Times New Roman' }}>
          Flexible Waste <br /> Management
        </div>
        <p className="mt-4 text-center text-black font-medium mb-4 md:mb-8 md:text-lg">
          Access government waste management services digitally: streamline waste collection, recycling, and disposal for a cleaner, greener community, all at your fingertips.
        </p>

      </div>
      <div className="md:w-1/2">
        <img className="w-full" src={heroimage} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
