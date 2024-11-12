import PageHeader from "@/app/admin/_components/PageHeader";
import { ProductForm } from "../../_components/ProductForm";
import db from "@/db/db";

export default async function EditProductPage({params: {id}}: {params: {id: string}}){

    const product = await db.product.findUnique({ where: {id}})

    return <>
    <div className="px-8  w-screen">
    <PageHeader>Edit Product</PageHeader>
    <ProductForm product={product} />
    </div>
    
    </>
}