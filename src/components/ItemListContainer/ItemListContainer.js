import { useEffect, useState } from 'react';
import { ItemList } from "../ItemList/ItemList";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import  db  from "../../Services/firebaseConfig";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { toast } from "react-toastify";


export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    let productsQuery;

    if (categoryId) {
      productsQuery = query(
        collection(db, 'productos'),
        where('category', "==", categoryId)
      );
    } else {
      productsQuery = collection(db, 'productos');
    }

    getDocs(productsQuery)
      .then((snapshot) => {
        if (snapshot.size === 0) {
          toast.error("producto no encontrado")
        }
        setItems(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((error) => toast.log(error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return loading ? (
    <Spinner variant="primary" />
  ) : (
    <ItemList listaProductos={items} />
  );
}












