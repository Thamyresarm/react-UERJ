function Wireframe({ children }) {
    return (
      <div className="flex bg-gray-100 min-h-screen">
        <div className="bg-sky-700 w-64 flex flex-col p-5">
          <div className="mb-5">
            <img src="WFDB-logo.png" alt="Logo" />
          </div>
          <div className="flex flex-1 overflow-y-auto pr-6">
          {children[0]}
        </div>
          <div>rodapé</div>
        </div>
        <div className="bg-gray-100 text-left min-h-screen flex-1">
          {children[1]}
        </div>
      </div>
    );
  }
  
  export default Wireframe;