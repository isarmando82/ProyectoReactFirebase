import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore, collection } from 'firebase/firestore';
import ItemDetail from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [data, setData] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const firestore = getFirestore();
        const queryCollection = collection(firestore, "productos");
        const queryDoc = doc(queryCollection, itemId);

        const docSnapshot = await getDoc(queryDoc);
        if (docSnapshot.exists()) {
          const itemData = docSnapshot.data();
          setData({ id: docSnapshot.id, ...itemData });
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [itemId]);

  if (!data) {
    return null; 
  }

  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;




