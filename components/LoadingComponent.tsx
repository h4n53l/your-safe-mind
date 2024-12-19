const LoadingComponent = () => {
    return (
        <div className="absolute z-50 flex justify-center mt-56 flex-col text-green-600 items-center space-x-2">
        <img 
          src="logo.gif" 
          alt="Loading..." 
          className="w-96 h-96"
        />
        <span>Loading...</span>
      </div>
    );
}

export default LoadingComponent;