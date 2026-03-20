type Props = {
    text : string ,
    scrollTo? : string // optional for now
}

const PrimaryButton = ( {text, scrollTo} : Props ) => {
  return (
    <button className="cursor-pointer px-6 py-2 bg-my-blue rounded-full font-medium hover:bg-my-light-black transition-colors duration-300">
        {text}
    </button>
  )
}

export default PrimaryButton