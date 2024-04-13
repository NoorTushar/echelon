const SectionTitle = ({ upperTitle, mainTitle }) => {
   return (
      <div className="text-center">
         <span className="text-sm font-light tracking-[5px] uppercase">
            {upperTitle}
         </span>
         <h2 className="tracking-[5px] text-[45px] mb-5 uppercase">
            {mainTitle}
         </h2>
      </div>
   );
};

export default SectionTitle;
