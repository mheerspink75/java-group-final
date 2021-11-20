const ImageWithText = ({ imgSrc, Text }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      
      <p> {Text} </p>
      <div className='head-image'>
        {/* TODO: update img styling */}
        <img style={{}} src={imgSrc} alt='BackgroundImage' />
      </div>
    </div>
  )
}

export default ImageWithText
