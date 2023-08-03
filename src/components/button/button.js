export default function Button({
    width,
    height,
    backgroundColor,
    color,
    borderRadius,
    fontSize,
    buttonText,
    fontWeight,
    onClick
  }) {
    return (
      <button
      onClick={onClick}
        className="flex justify-center items-center text-white font-dmsans px-10 py-3 "
        style={{
          width,
          height,
          backgroundColor,
          color,
          borderRadius,
          fontSize,
          fontWeight,
        }}
     
      >
        {buttonText}
      </button>
    );
  }
  