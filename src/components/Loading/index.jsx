import HashLoader from 'react-spinners/HashLoader'

const Loading = () => {
    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
  return (
    <>
      <HashLoader color='#36d7b7' style={style} />
    </>
  )
}

export default Loading
