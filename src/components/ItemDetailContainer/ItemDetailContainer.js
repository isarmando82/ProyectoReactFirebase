import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore, collection } from 'firebase/firestore';
import ItemDetail from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [data, setData] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const firestore = getFirestore();
    const queryCollection = collection(firestore, "productos");
    const queryDoc = doc(queryCollection, itemId);

    getDoc(queryDoc)
      .then(res => setData({ id: res.id, ...res.data() }))
      .catch(error => console.log(error));
  }, [itemId]);

  return <ItemDetail data={data} />;
}

export default ItemDetailContainer;




