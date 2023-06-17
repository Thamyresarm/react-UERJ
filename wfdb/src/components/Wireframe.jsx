function Wireframe({ children }) {
  return (
    <div className="flex bg-gray-100 overflow-hidden wireframe">
      <div className="bg-sky-700 w-64 flex flex-col p-5 pb-0 drop-shadow-2xl">
        <div className="mb-5 pb-5 border-b border-sky-800 flex flex-col content-center">
          <span className="text-sm text-white">Alerta de incêdio nas últimas 48hs.</span>
        </div>
        <div className="flex flex-1 overflow-y-auto pr-6 w-full">{children[0]}</div>
        <div className="grid grid-cols-2 p-6 border-t border-sky-800 gap-x-2">
            {children[2]}
        </div>
      </div>
      <div className="bg-gray-100 text-left min-h-screen flex-1 relative flex items-center justify-center">
        {children[1]}
      </div>
    </div>
  );
}

export default Wireframe;