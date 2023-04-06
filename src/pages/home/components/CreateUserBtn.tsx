import { UserEmptyState } from "@/models";
import { createUser } from "@/redux/slices/user.slice"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { fetchMorty, rickAndMortyUrl } from "../services/api.service";
import type { AppDispatch } from "@/redux/store";

export default function CreateUserBtn() {
  const dispatch = useDispatch<AppDispatch>();
  const [morty, setMorty] = useState(UserEmptyState);
  const getCharacter = async () => {
    const result = await fetchMorty(rickAndMortyUrl);
    setMorty(result);
  };

  useEffect(() => {
    getCharacter();
  }, [])
  

  const dispatchActions = () => {
    dispatch(createUser(morty));
  };


  return (
    <button onClick={dispatchActions}>Dispatch Create Action</button>
  )
}
