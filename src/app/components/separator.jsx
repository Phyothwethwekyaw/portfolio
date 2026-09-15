const Separator = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#d2d2d7] dark:border-[#3a3a3c]"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-white dark:bg-[#1d1d1f] px-4">
            <div className="h-2 w-2 rounded-full bg-[#FFD700] dark:bg-[#FFD700] shadow-[0_0_8px_2px_rgba(255,215,0,0.5)] dark:shadow-[0_0_8px_2px_rgba(255,215,0,0.5)]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Separator;