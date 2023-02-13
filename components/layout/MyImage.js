import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
  console.log(src);
  return `${src}?w=${width}&q=${quality || 75}`
}

function MyImage(props) {
  return (
    <Image
      loader={myLoader}
      placeholder="blur"
      blurDataURL={props.src}
      src={props.src}
      alt={props.title}
      width={props.w ?? 1024}
      height={props.w ?? 400}
    />
  )
}

export default MyImage;