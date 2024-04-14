const Estate = ({ eachState }) => {
   const {
      estate_title,
      segment_name,
      description,
      price,
      status,
      area,
      location,
      facilities,
      estate_image_small,
   } = eachState;
   return (
      <div>
         <div className="shadow-md bg-gray-900 text-gray-100">
            <div>
               <img
                  src={estate_image_small}
                  alt=""
                  className="object-cover object-center w-full h-72 bg-gray-500"
               />
            </div>
            <div className="flex flex-col justify-between p-6 space-y-8">
               <div className="space-y-2">
                  <h2 className="text-3xl font-semibold tracking-wide">
                     Donec lectus leo
                  </h2>
                  <p className="text-gray-100">
                     Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                     eget.
                  </p>
               </div>
               <button
                  type="button"
                  className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900"
               >
                  Read more
               </button>
            </div>
         </div>
      </div>
   );
};

export default Estate;
