import PageHeader from "../../_components/PageHeader";
import { ProductForm } from "../_components/ProductForm";

export default function NewProductPage(){
    return <>
    <div className="px-8  w-screen">
    <PageHeader>Add Product</PageHeader>
    <ProductForm/>
    </div>
    
    </>
}