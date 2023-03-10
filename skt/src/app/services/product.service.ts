import { Injectable } from '@angular/core';
import { collection, collectionData, deleteDoc, doc, docSnapshots, Firestore, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: Firestore) { }

  save(product: Product): Promise<void> {
    const document = doc (collection(this.firestore, 'products'));
    return setDoc(document, product);
  }

  list(): Observable<Product[]> {
    const productsCollection = collection(this.firestore, 'products');
    return collectionData(productsCollection, {idField: 'id'}).pipe(
      map(result => result as Product[])
    );
  }

  find(id: string): Observable<Product> {
    const document = doc(this.firestore, `products/${id}`);
    return docSnapshots(document)
    .pipe(
      map(doc => {
        const id = doc.id;
        const data = doc.data();
        return { id, ...data } as Product;
      })
    );
  }

  findByName(name: string): Observable<Product[]> {
    const productList = this.list();
    return productList.pipe(
      map(
        products => products.filter(product => {
          const fullName = product.name.concat("", product.supplier);
          return fullName.toLowerCase().match(name.toLowerCase());
        })
    ));
  }

  update(product: Product): Promise<void> {
    const document = doc(this.firestore, 'products', product?.id);
    const {id, ...data } = product;
    return setDoc(document, data);
  }

  delete(id:string): Promise<void> {
    const document = doc(this.firestore, 'products', id);
    return deleteDoc(document);
  }
  

}
