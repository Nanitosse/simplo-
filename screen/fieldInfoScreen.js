import RenderField from "../features/fields/RenderField";

const FieldInfoScreen = ({route})=>{
    const{item}= route.params;
    return <RenderField item={item}/>

}

export default FieldInfoScreen;