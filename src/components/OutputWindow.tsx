const OutputWindow = ({ outputDetails }) => {
  return (
    <>
      <h1 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-2">
        RESULT
      </h1>
      <div className="w-full h-56 bg-[#1e293b] rounded-md text-white font-normal text-sm overflow-y-auto p-3">
        {outputDetails?.map((item) => (
          <span style={{ border: '1px solid green', padding: '5px 10px' }}>
            {item}
          </span>
        ))}
      </div>
    </>
  );
};

export default OutputWindow;
