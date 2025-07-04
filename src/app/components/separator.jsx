const Separator = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300 dark:border-[#2C2F48]"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-white dark:bg-[#0E0E1A] px-4">
            <div className="h-2 w-2 rounded-full bg-amber-500 dark:bg-[#FFD700] shadow-[0_0_8px_2px_rgba(245,158,11,0.5)] dark:shadow-[0_0_8px_2px_#6F42C1]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Separator;