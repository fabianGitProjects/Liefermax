import Produkt from "@/models/Produkt";
import mongodb from "@/utils/mongodb";
import jsondb from "@/jasondb/produkte";
import {useRouter} from "next/router"
import Link from "next/link"
import Image from "next/image"
import { ListGroup, Button, ListGroupItem } from "react-bootstrap";
import {useState} from "react"
import { useDispatch } from "react-redux";
import { addProdukte } from "@/redux/warenkorbSlice";
import { v4 as uuidv4 } from "uuid";


export default function Produktseite({produkt}) {
    //const router = useRouter();
    //const {url} = router.query;
    //const produkt = jsondb.produkte.find((a)=> a.url===url);

    const [preis, setPreis] = useState(produkt.preis);
    const [extras, setExtras] = useState([]);
    const [menge, setMenge] = useState(1);
    const dispatch = useDispatch();
    const router = useRouter();

    const addExtra = (e, extra) =>{
        const checked = e.target.checked;
        if (checked){
            setPreis(preis + extra.preis)
            setExtras([...extras, extra])

        } else {
            setPreis(preis - extra.preis)
            setExtras(extras.filter((alleExtras) => alleExtras._id !== extra._id))
        }
    }

   
    
    const zumWarenkorb = () =>{
        const _id = uuidv4();
        dispatch(addProdukte({...produkt, extras, preis, menge, _id}))
        router.push("/warenkorb")
    }

    if(produkt){
        return(
            <div>
                <div className>
                    <Link legacyBehavior href="/">
                        <a className="text-dark">
                         ⬅️ Zurück zur Übersicht
                         </a>
                
                    </Link>
                </div>

                <div className="row row-cols-2 mt-3">
                    <div>
                    <Image className="rounded-3" src={produkt.bild} alt={produkt.name} width={600} height= {600} layout="responsive" />
                
                    </div>
                 <div>
                    <h1> 
                        {produkt.name}
                    </h1>
                    <ListGroup variant="flush">
                        <ListGroupItem>
                           <h2 className="text-danger"> {preis.toFixed(2)}€</h2>
                        </ListGroupItem>
                        <ListGroupItem>
                            {produkt.beschreibung}
                        </ListGroupItem>
                        <ListGroupItem>
  {produkt.extras && produkt.extras.length ? (
    <>
      <strong>Extras: </strong>
      {produkt.extras.map((extra) => (
        <div key={extra._id} className="mb-2">
          <span>{extra.text} </span>
          <input className="form-check-input me-2" 
          type="checkbox"
          id={extra.text}
          onChange={(e) => addExtra(e,extra)}
           />
        </div>
      ))}
    </>
  ) : null}
</ListGroupItem>

                        <ListGroupItem>
                            <input className="form-control w-50 " type="number" value={menge} min="1" max="100"
                            onChange={(e) => setMenge(e.target.value)}>

                            </input>
                        </ListGroupItem>
                        <ListGroupItem>
                            <div className="row shadow">
                                <Button variant="danger" onClick={zumWarenkorb}>zum Warenkorb</Button>
                            </div>
                        </ListGroupItem>
                    </ListGroup>
                </div>

                
            </div>
            </div>

            
        )
    }
    
        return(
            <div>Produkt nicht vorhanden!</div>
        )
    
}

export async function getServerSideProps(context){
    const url = context.params.url;
    await mongodb.dbConnect();
    const produkt = await Produkt.findOne({url}).lean();
    return {
      props: {
        produkt: JSON.parse(JSON.stringify(produkt))
      }
    }
  }




