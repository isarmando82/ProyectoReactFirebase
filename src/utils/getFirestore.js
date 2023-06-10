import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";

export const getCollection = async (collections) => {
  const db = getFirestore();
  const categoriaCollection = collection(db, collections);
  const result = await getDocs(categoriaCollection); 
  return result.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getDocument = async (collectionName, documentId) => {
  const db = getFirestore();
  const documentRef = doc(db, collectionName, documentId);
  const documentSnapshot = await getDoc(documentRef);

  if (documentSnapshot.exists()) {
    const documentData = documentSnapshot.data();
    const documentWithDetails = { id: documentSnapshot.id, ...documentData };
    return documentWithDetails;
  }

  return null;
};

export const getAllProducts = async () => {
  const db = getFirestore();
  const productosCollection = collection(db, 'productos');
  const result = await getDocs(productosCollection);
  const productos = result.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  
  // Obtén todas las categorías presentes en los productos
  const categorias = [...new Set(productos.map((producto) => producto.category))];

  // Obtén los productos de cada categoría
  const productosPorCategoria = categorias.map((categoria) => {
    const productosCategoria = productos.filter((producto) => producto.category === categoria);
    return { categoria, productos: productosCategoria };
  });

  return productosPorCategoria;
};