import PropType from "prop-types"
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-3/12 ">
            <p className="text-yellow-600 pb-4">--- {subHeading} ---</p>
            <h2 className="text-3xl border-y-2 uppercase py-5 mb-12">{heading}</h2>
        </div>
    );
};
SectionTitle.propTypes ={
    heading: PropType.object,
    subHeading: PropType.object
}
export default SectionTitle;