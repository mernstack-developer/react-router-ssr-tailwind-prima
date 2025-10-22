import React from 'react'
//import type { Route } from "./routes/+city";
//export async function loader({ params }: Route.LoaderArgs) {
  //let team = await fetchTeam(params.teamId);
 // return { name: params.city };
//}
import { useParams } from "react-router";
export default function city({
  params: { city }
}: { params: { city: string } }) {
 // let params = useParams();
  
  return (
    <div>
        <h1>City Concerts in {city}</h1>
    </div>
  )
}
