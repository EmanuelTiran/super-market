
import { useNavigate } from 'react-router-dom';

export default function Categories({style}) {
  const navigate = useNavigate();
  const categ = ["fruits", "alcohol", "dairy", "vegetables"];
  let navi = (c) => {
    { navigate("/categories/" + c) };
  }
  return (
    <div>
    {categ.map(c => (
      <div key={c} className={`category ${style}`} onClick={() => navi(c)}>
        {c}
      </div>
    ))}
  </div>
  )
}
