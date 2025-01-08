import defaultBackground from '../assets/background-game.jpeg'


export default function Background({ backgroundImage, children }) {
    return (
        <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage || defaultBackground})` }}
    >
      {children}
    </div>
    )
}