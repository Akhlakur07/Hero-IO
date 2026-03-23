const LoadingSpinner = ({ text = "Loading..." }) => {
  return (
    <div className="flex items-center justify-center gap-3 py-8">
      <span className="loading loading-spinner loading-md text-[#632EE3]" />
      <p className="text-sm text-[#627382]">{text}</p>
    </div>
  );
};

export default LoadingSpinner;
