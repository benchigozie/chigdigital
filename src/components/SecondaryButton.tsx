type Props = {
    text : string ,
    scrollTo? : string // optional for now
}

const SecondaryButton = ( {text, scrollTo} : Props ) => {
    return (
        <button className="cursor-pointer px-6 py-2 outline-1 outline-my-light-black rounded-full font-medium hover:bg-my-light-black transition-colors duration-300">
            {text}
        </button>
      )
}

export default SecondaryButton