import { Table, Button, CloseButton } from 'react-bootstrap'
import { useRouter } from 'next/router'
import axios from 'axios';
import Link from "next/link";

export default function Bestellung({ bestellungen }) {
    const router = useRouter();
    const status = ["Eingegangen", "Zubereitung", "Unterwegs", "Ausgeliefert"];

    const statusUpdate = async (id, aktuellerStatus) => {
        try {
            if (aktuellerStatus <= 2) {
                await axios.put(`http://localhost:3000/api/bestellungen/` + id, { status: aktuellerStatus + 1 });
                router.reload();
            }
        } catch (error) {
            console.log(error)
        }
    }

    const bestellungEntfernen = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/bestellungen/` + id);
            router.reload();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Admin Backend</h1>
            <div className="row mt-4">
                <div className="col-12">
                    <Table hover responsive>
                        <thead>
                            <tr>
                                <th>Bestell Nr.</th>
                                <th>Kunde</th>
                                <th>Adresse</th>
                                <th>Status</th>
                                <th><CloseButton disabled /></th>
                            </tr>
                        </thead>
                        {bestellungen.map((bestellung) => (
                            <tbody key={bestellung._id}>
                                <tr>
                                    <td>
                                        <Link href={`/bestellungen/${bestellung._id}`}>
                                            <a className='text-danger'>
                                                {bestellung._id}
                                            </a>
                                        </Link>
                                    </td>
                                    <td>{bestellung.kunde}</td>
                                    <td>{bestellung.adresse}</td>
                                    <td>
                                        <Button onClick={() => statusUpdate(bestellung._id, bestellung.status)}>{status[bestellung.status]}</Button>
                                    </td>
                                    <td>
                                        <Button variant="danger" onClick={() => bestellungEntfernen(bestellung._id)}>x</Button>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </div>
            </div>
        </div>
    )
}


export async function getServerSideProps(ctx) {
    const meinCookie = ctx.req?.cookies || "";
    if (meinCookie.token !== process.env.TOKEN) {
        return {
            redirect: {
                destination: "/backend/login",
                permant: false
            }
        }
    }
    const res = await axios.get(`http://localhost:3000/api/bestellungen`);
    return {
        props: { bestellungen: res.data },
    };
}