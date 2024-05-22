import classes from "./NewItemCategory.module.css";

const NewItemCategory = ({ onChange }) => {
    return (
        <>
            <div className={classes.title}>
                <h4>Pick a category</h4>
            </div>
            <div className={classes.options}>
                <label>
                    <input
                        type='radio'
                        name='category'
                        value='business'
                        onChange={onChange}
                    />
                    <span
                        className={`${classes.bubble} ${classes.business}`}
                    ></span>
                    <div>Business</div>
                </label>
                <label>
                    <input
                        type='radio'
                        name='category'
                        value='personal'
                        onChange={onChange}
                    />
                    <span
                        className={`${classes.bubble} ${classes.personal}`}
                    ></span>
                    <div>Personal</div>
                </label>
            </div>
        </>
    );
};

export default NewItemCategory;
