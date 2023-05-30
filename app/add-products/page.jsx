import FormPropsTextFields from "@/components/FormPropsTextFields/FormPropsTextFields";

export default function AddNewProduct() {
    return (
        <main className='Home AddNewProduct'>
            <div className="subheader-div">
                <h3 className="title">Leguminosas & Hortaliças</h3>
                <div className="subtitle-div">
                    <p className="subtitle">Adicionar produto</p>
                </div>
            </div>
            <div className="new-product-form">
                <FormPropsTextFields />
            </div>
        </main>
    )
}
