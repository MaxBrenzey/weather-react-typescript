import Feels from "./Icons/Feels"
import Pop from "./Icons/Pop"
import Pressure from "./Icons/Pressure"
import Visibility from "./Icons/Visibility"
import Wind from "./Icons/Wind"
import Humidity from "./Icons/Humidity"

type Props = {
  icon: 'wind' | 'feels' | 'humidity' | 'visibility' | 'pressure' | 'pop'
  title: string
  info: string | JSX.Element
  descriprion: string
}

const icons = {
  wind: Wind,
  feels: Feels,
  humidity: Humidity,
  visibility: Visibility,
  pressure: Pressure,
  pop: Pop
}

const Tile = ({
  icon,
  title,
  info,
  descriprion
}: Props): JSX.Element => {
  cosnt Icon = icons[icon]

  return (
    <article className="w-[140px] h-130px text-zinc-700 bg-white/20 backdrop-blur-ls rounded drop-shadow-lg 
      p-2 mb-5 flex flrx-col justify-between">
      <div className="flex items-center text-sm font-bold">
        <Icon /> 
        <h4 className="ml-1">{title}</h4> 
      </div>
      <h3 className="mt-2 text-lg">{info}</h3>
      <p className="text-xs font-bold">{descriprion}</p>
    </article>
  )
}

export default Tile;
